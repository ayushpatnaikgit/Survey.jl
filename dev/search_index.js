var documenterSearchIndex = {"docs":
[{"location":"examples/","page":"Examples","title":"Examples","text":"In the following examples, we'll compare R and Julia for performing the same set of operations. ","category":"page"},{"location":"examples/#Installing-and-loading-the-package","page":"Examples","title":"Installing and loading the package","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"install.package(\"survey\")\nlibrary(survey)","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"using Pkg\nPkg.add(url = \"https://github.com/xKDR/Survey.jl.git\")","category":"page"},{"location":"examples/#Data","page":"Examples","title":"Data","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"The input data for the Survey package should be a DataFrame object. In this example, we'll use the apiclus1 data from the api dataset. ","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"data(api) ","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"This loads the apiclus1 data as apiclus1 variable.  ","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"data(api)","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"This also loads the apiclus1 data as apiclus1 variable.  ","category":"page"},{"location":"examples/#svydesign","page":"Examples","title":"svydesign","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"dclus1<-svydesign(id=~dnum, weights=~pw, data=apiclus1, fpc=~fpc)","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"dclus1 = svydesign(id= :dnum, weights= :pw, data = apiclus1, fpc= :fpc","category":"page"},{"location":"examples/#svyby","page":"Examples","title":"svyby","text":"","category":"section"},{"location":"examples/#Mean","page":"Examples","title":"Mean","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"svyby(~api00, design = dclus1, svymean)\nsvyby(~api00, by =~cname, design = dclus1, svymean)","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"svyby(:api00, dclus1, svymean)\nsvyby(:api00, :cname, dclus1, svymean)","category":"page"},{"location":"examples/#Sum","page":"Examples","title":"Sum","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"svyby(~api00, by =~cname, design = dclus1, svytotal)","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"svyby(:api00, dclus1, svytotal)","category":"page"},{"location":"examples/#Quantile","page":"Examples","title":"Quantile","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"svyby(~api00, by =~cname, design = dclus1, svyquantile, quantile = 0.63)\n","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"svyby(:api00, :cname, dclus1, svyquantile, 0.63)","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = Survey","category":"page"},{"location":"#Survey","page":"Home","title":"Survey","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for Survey.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [Survey]","category":"page"},{"location":"#Survey.svydesign","page":"Home","title":"Survey.svydesign","text":"The svydesign object combines a data frame and all the survey design information needed to analyse it.\n\njulia> using Survey; \n\njulia> data(api); \n\njulia> dclus1 = svydesign(id= :dnum, weights= :pw, data = apiclus1, fpc= :fpc) |> print\nSurvey Design:\ndata: 183x40 DataFrame\nweights: pw\nid: dnum\nfpc: fpc\nnest: false\ncheck_strat: false\n\n\n\n\n\n","category":"type"},{"location":"#Survey.svyby","page":"Home","title":"Survey.svyby","text":"julia> using Survey, Statistics, StatsBase;   \n\njulia> data(api); \n\njulia> dclus1 = svydesign(id=:dnum, weights=:pw, data = apiclus1, fpc=:fpc);\n\njulia> svyby(:api00, dclus1, svymean)\n644.1693989071047\n\n\n\n\n\n","category":"function"},{"location":"#Survey.svyby-2","page":"Home","title":"Survey.svyby","text":"julia> using Survey, Statistics, StatsBase;        \n\njulia> data(api); \n\njulia> dclus1 = svydesign(id=:dnum, weights=:pw, data = apiclus1, fpc=:fpc); \n\njulia> svyby(:api00, :cname, dclus1, svymean)\n11×2 DataFrame\n Row │ cname        api00   \n     │ String15     Float64 \n─────┼──────────────────────\n   1 │ Alameda      669.0\n   2 │ Fresno       472.0\n   3 │ Kern         452.5\n   4 │ Los Angeles  647.267\n   5 │ Mendocino    623.25\n   6 │ Merced       519.25\n   7 │ Orange       710.563\n   8 │ Plumas       709.556\n   9 │ San Diego    659.436\n  10 │ San Joaquin  551.189\n  11 │ Santa Clara  732.077\n\n\n\n\n\n","category":"function"}]
}
