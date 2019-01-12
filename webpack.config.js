const HtmlWebpackplugin = require("html-webpack-plugin");
const HtmlWebpackpluginConfig = new HtmlWebpackplugin({
  template: `${__dirname}/src/index.html`,
  filename: "index.html",
  inject: "body"
});

const path = require("path");

module.exports = {
  entry: [
    "./src/index.js"
    
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react", "stage-1"]
        }
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      }
    ]
  },
  devServer: {
    port: 8000,
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true
  },
  plugins: [HtmlWebpackpluginConfig]
};
