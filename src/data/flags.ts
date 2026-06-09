export function flagEmoji(code: string): string {
  const map: Record<string, string> = {
    ENG:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', SCO:'🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    ESP:'🇪🇸', ARG:'🇦🇷', FRA:'🇫🇷', BRA:'🇧🇷', POR:'🇵🇹',
    NED:'🇳🇱', BEL:'🇧🇪', GER:'🇩🇪', CRO:'🇭🇷', MAR:'🇲🇦',
    COL:'🇨🇴', USA:'🇺🇸', MEX:'🇲🇽', URU:'🇺🇾', SUI:'🇨🇭',
    JPN:'🇯🇵', SEN:'🇸🇳', IRN:'🇮🇷', KOR:'🇰🇷', ECU:'🇪🇨',
    AUT:'🇦🇹', TUR:'🇹🇷', AUS:'🇦🇺', CAN:'🇨🇦', NOR:'🇳🇴',
    PAN:'🇵🇦', ALG:'🇩🇿', EGY:'🇪🇬', SCO_SH:'🇸🇨', PAR:'🇵🇾',
    TUN:'🇹🇳', CIV:'🇨🇮', SWE:'🇸🇪', CZE:'🇨🇿', UZB:'🇺🇿',
    QAT:'🇶🇦', COD:'🇨🇩', IRQ:'🇮🇶', KSA:'🇸🇦', RSA:'🇿🇦',
    JOR:'🇯🇴', CPV:'🇨🇻', BIH:'🇧🇦', GHA:'🇬🇭', CUW:'🇨🇼',
    HAI:'🇭🇹', NZL:'🇳🇿',
  };
  return map[code] || '⚽';
}
