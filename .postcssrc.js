module.exports = {
  plugins: {
    autoprefixer: {},
    postcss:[require('postcss-px2rem')({'remUnit':75,'baseDpr':2})]
  }
}