module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react"
    ],
    "rules": {
       "react/jsx-filename-extension": [0, { "extensions": [".js", ".jsx"] }],
       "react/forbid-prop-types": [2, { "forbid": ["any"] }],
    }
};
