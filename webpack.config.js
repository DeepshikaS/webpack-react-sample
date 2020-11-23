const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    module:{
        rules:[
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                },
                
            },
            {
                test:/\.css$/i,
                use:[
                    {
                        loader:"style-loader"
                    },
                    {   //to map class name be scoped locally and specific only to the component it is needed
                        loader:"css-loader",
                        options:{
                            modules: true,//to enable css modules
                            importLoaders: 1,//how many loaders should load before css-loader to be applied
                            //loacalIdentName:"[name]_[local]_[hash:base:64]",//to configure generated identification
                            sourceMap: true,
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
}