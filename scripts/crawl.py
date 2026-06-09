"""
无服务器爬虫脚本
================================
由 GitHub Actions 每 30 分钟运行一次
自动拉取 FIFA 排名 + 天气 + 模拟比分
结果写入 public/data/*.json，前端直接 fetch

pip install requests
"""

import json
import os
import time
from datetime import datetime, timezone, timedelta
from pathlib import Path

ROOT = Path(__file__).parent.parent
DATA_DIR = ROOT / "public" / "data"
DATA_DIR.mkdir(parents=True, exist_ok=True)

BEIJING_TZ = timezone(timedelta(hours=8))

def save_json(filename, data):
    data["_updatedAt"] = datetime.now(BEIJING_TZ).strftime("%Y-%m-%d %H:%M:%S")
    data["_updatedAtTs"] = int(time.time() * 1000)
    path = DATA_DIR / filename
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"  ✅ {filename}")

# ===== 1. 天气 =====
def update_weather():
    print("\n🌤️ 天气数据...")
    import requests
    venues = {
        "墨西哥城":     (19.43, -99.13),
        "瓜达拉哈拉":   (20.68, -103.35),
        "多伦多":       (43.65, -79.38),
        "洛杉矶":       (33.94, -118.35),
        "温哥华":       (49.28, -123.12),
        "旧金山湾区":   (37.35, -121.95),
        "纽约新泽西":   (40.81, -74.07),
        "波士顿":       (42.09, -71.26),
        "休斯敦":       (29.68, -95.41),
        "达拉斯":       (32.75, -97.08),
        "费城":         (39.90, -75.17),
        "蒙特雷":       (25.68, -100.30),
        "亚特兰大":     (33.76, -84.40),
        "西雅图":       (47.60, -122.33),
        "迈阿密":       (25.96, -80.24),
        "堪萨斯城":     (39.05, -94.48),
    }
    codes = {0:("晴","☀️"),1:("晴","☀️"),2:("多云","⛅"),3:("阴","☁️"),
             45:("雾","🌫️"),51:("雨","🌧️"),61:("雨","🌧️"),80:("阵雨","🌦️"),95:("雷暴","⛈️")}
    result = {}
    for city, (lat, lon) in venues.items():
        try:
            url = f"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto&forecast_days=1"
            c = requests.get(url, timeout=10).json()["current"]
            cond, icon = codes.get(c.get("weather_code",0), ("晴","🌤️"))
            result[city] = {"temp":round(c["temperature_2m"]),"humidity":c["relative_humidity_2m"],"wind":round(c.get("wind_speed_10m",0),1),"condition":cond,"icon":icon}
        except Exception as e:
            result[city] = {"temp":25,"humidity":60,"wind":0,"condition":"待更新","icon":"🌤️"}
    save_json("weather.json", {"venues": result})

# ===== 2. 排名 =====
def update_rankings():
    print("\n📊 FIFA 排名...")
    try:
        import requests
        r = requests.get("https://inside.fifa.com/api/fifa-world-ranking/men", headers={"User-Agent":"Mozilla/5.0"}, timeout=15)
        if r.status_code == 200:
            data = r.json().get("rankings", [])[:50]
            teams = [{"rank":t["rank"],"name":t["teamName"],"code":t["teamCode"],"points":round(t["totalPoints"],2)} for t in data]
            save_json("rankings.json", {"rankingDate": datetime.now().strftime("%Y-%m-%d"), "teams": teams})
            return
    except: pass
    # 兜底
    print("  → 使用兜底数据")
    if not (DATA_DIR / "rankings.json").exists():
        save_json("rankings.json", {"rankingDate":"2026-06-04","teams":[
            {"rank":1,"name":"阿根廷","code":"ARG","points":1874.81},
            {"rank":2,"name":"西班牙","code":"ESP","points":1873.01},
            {"rank":3,"name":"法国","code":"FRA","points":1869.43},
            {"rank":4,"name":"英格兰","code":"ENG","points":1825.97},
            {"rank":5,"name":"葡萄牙","code":"POR","points":1763.83},
            {"rank":6,"name":"巴西","code":"BRA","points":1762.66},
            {"rank":7,"name":"摩洛哥","code":"MAR","points":1756.94},
            {"rank":8,"name":"荷兰","code":"NED","points":1751.1},
            {"rank":9,"name":"比利时","code":"BEL","points":1739.55},
            {"rank":10,"name":"德国","code":"GER","points":1731.3},
        ]})

# ===== 3. 模拟比分（赛事期间接入 API-Football） =====
def update_scores():
    print("\n⚽ 比分...")
    now = datetime.now(BEIJING_TZ)
    matches = []
    schedule = [
        ("m1","2026-06-12","03:00","MEX","RSA"),("m2","2026-06-13","01:00","KOR","CZE"),
        ("m3","2026-06-14","01:00","BRA","HAI"),("m4","2026-06-14","03:00","NED","JPN"),
        ("m5","2026-06-15","01:00","BEL","IRN"),("m6","2026-06-15","03:00","GER","CUW"),
        ("m7","2026-06-16","01:00","ARG","ALG"),("m8","2026-06-16","03:00","ESP","TUR"),
        ("m9","2026-06-16","03:00","FRA","SEN"),("m10","2026-06-17","01:00","CRO","AUS"),
    ]
    for mid, d, t, home, away in schedule:
        y,m,d = map(int, d.split("-"))
        hh,mm = map(int, t.split(":"))
        ko = datetime(y,m,d,hh,mm,tzinfo=BEIJING_TZ)
        diff = (now - ko).total_seconds()/60
        if diff < 0: continue
        st = "not_started"; mn = 0
        if diff >= 0 and diff < 50: st="1H"; mn=int(diff)
        elif diff >= 50 and diff < 65: st="HT"; mn=45
        elif diff >= 65 and diff < 115: st="2H"; mn=int(diff-15)
        else: st="FT"; mn=90
        s = abs(hash(mid+d))%100
        hg = min(6,(s%4)+1+int(max(0,diff))//18)
        ag = min(4,max(0,((s*7)%5)+int(max(0,diff))//22))
        matches.append({"id":mid,"home":home,"away":away,"hg":hg,"ag":ag,"status":st,"minute":mn})
    save_json("live-scores.json", {"matches":matches, "count":len(matches)})

# ===== 运行 =====
if __name__ == "__main__":
    print("⚽ World Cup 数据更新开始\n")
    update_weather()
    update_rankings()
    update_scores()
    print(f"\n✅ 完成 → {DATA_DIR}")
