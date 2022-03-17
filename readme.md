Findings:

you have to manually edit the package.json so that it matches the @<username>/<repository name> schema

the package-lock.json names will just require the <username> in the "name" fields

add this to the package.json file
```json
 "publishConfig": {
        "registry": "https://github.com/<Username>/<Repository>.git"
    },
```

create a file called "tsconfig.json"

put the following in it:
```json
{
    "compilerOptions": {
      "lib": ["es2017"],
      "module": "commonjs",
      "noImplicitReturns": true,    
      "esModuleInterop": true,
      "outDir": "dist",
      "sourceMap": true,
      "target": "es5",
      "declaration": true,
      "types": [
        "mocha", "node", "chai"
      ]
    },
    "compileOnSave": true,
    "include": [
      "src"
    ]
}
```

The tags are the main cause for the issues, for each alteration, a new tag would have to be made.