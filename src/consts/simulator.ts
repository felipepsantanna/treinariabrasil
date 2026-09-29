/**
 * Constantes de configuração do Simulador de Ganhos
 * 
 * PLACEHOLDER: Altere a taxa de câmbio USD -> BRL abaixo conforme a cotação desejada.
 */
export const MOCK_USD_TO_BRL = 5.75;

export const SIMULATOR_DEFAULTS = {
  hoursPerDay: 2,
  daysPerMonth: 22,
  defaultCurrency: 'BRL' as 'BRL' | 'USD',
  // Base horária média calculada a partir das plataformas recomendadas ($6.00/h base, podendo chegar a $8.00/h em turbinadas)
  averageHourlyUsd: 6.0,
  maxHourlyUsd: 8.0,
  brazilianHourlyBrl: 25.0, // Flambra
};
