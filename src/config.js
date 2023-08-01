const config = () => {
  const env = {
    production: {
      featureToggles: {
        UIRefresh2022: true,
      },
      sheetUrl: 'https://raw.githubusercontent.com/samu-developments/build-your-own-radar/csv/data/golden.csv',
    },
    development: {
      featureToggles: {
        UIRefresh2022: true,
      },
      sheetUrl: 'https://raw.githubusercontent.com/samu-developments/build-your-own-radar/csv/data/golden.csv',
    },
  }
  return process.env.ENVIRONMENT ? env[process.env.ENVIRONMENT] : env
}
module.exports = config
