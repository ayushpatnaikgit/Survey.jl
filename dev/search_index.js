var documenterSearchIndex = {"docs":
[{"location":"performance/#Performance","page":"Performance","title":"Performance","text":"","category":"section"},{"location":"performance/#Grouping-by-a-single-column","page":"Performance","title":"Grouping by a single column","text":"","category":"section"},{"location":"performance/","page":"Performance","title":"Performance","text":"R","category":"page"},{"location":"performance/","page":"Performance","title":"Performance","text":"> library(survey)\n> library(microbenchmark)\n> data(api)\n> dclus1 <- svydesign(id = ~dnum, weights = ~pw, data = apiclus1, fpc = ~fpc)\n> microbenchmark(svyby(~api00, by = ~cname, design = dclus1, svymean, keep.var = FALSE), units = \"us\")","category":"page"},{"location":"performance/","page":"Performance","title":"Performance","text":"Unit: microseconds\n                                                                   expr\n svyby(~api00, by = ~cname, design = dclus1, svymean, keep.var = FALSE)\n      min       lq     mean   median       uq      max neval\n 9427.043 10587.81 11269.22 10938.55 11219.24 17620.25   100","category":"page"},{"location":"performance/","page":"Performance","title":"Performance","text":"Julia","category":"page"},{"location":"performance/","page":"Performance","title":"Performance","text":"using Survey, BenchmarkTools\ndata(api)\ndclus1 = svydesign(id=:dnum, weights=:pw, data = apiclus1, fpc=:fpc)\n@benchmark svyby(:api00, :cname, dclus1, svymean)","category":"page"},{"location":"performance/","page":"Performance","title":"Performance","text":"BenchmarkTools.Trial: 10000 samples with 1 evaluation.\n Range (min … max):  43.567 μs …   5.905 ms  ┊ GC (min … max): 0.00% … 90.27%\n Time  (median):     53.680 μs               ┊ GC (median):    0.00%\n Time  (mean ± σ):   58.090 μs ± 125.671 μs  ┊ GC (mean ± σ):  4.36% ±  2.00%","category":"page"},{"location":"performance/","page":"Performance","title":"Performance","text":"The median time is about 198 times lower in Julia as compared to R.","category":"page"},{"location":"performance/#Grouping-by-two-columns.","page":"Performance","title":"Grouping by two columns.","text":"","category":"section"},{"location":"performance/","page":"Performance","title":"Performance","text":"R","category":"page"},{"location":"performance/","page":"Performance","title":"Performance","text":"> library(survey)\n> library(microbenchmark)\n> data(api)\n> dclus1 <- svydesign(id = ~dnum, weights = ~pw, data = apiclus1, fpc = ~fpc)\n> microbenchmark(svyby(~api00, by = ~cname+meals, design = dclus1, svymean, keep.var = FALSE), units = \"us\")","category":"page"},{"location":"performance/","page":"Performance","title":"Performance","text":"Unit: microseconds\n                                                                                expr\n svyby(~api00, by = ~cname + meals, design = dclus1, svymean,      keep.var = FALSE)\n      min       lq     mean   median       uq      max neval\n 120823.6 131472.8 141797.3 134375.8 140818.3 263964.3   100","category":"page"},{"location":"performance/","page":"Performance","title":"Performance","text":"Julia","category":"page"},{"location":"performance/","page":"Performance","title":"Performance","text":"using Survey, BenchmarkTools\ndata(api)\ndclus1 = svydesign(id=:dnum, weights=:pw, data = apiclus1, fpc=:fpc)\n@benchmark svyby(:api00, [:cname, :meals], dclus1, svymean)","category":"page"},{"location":"performance/","page":"Performance","title":"Performance","text":"BenchmarkTools.Trial: 10000 samples with 1 evaluation.\n Range (min … max):  64.591 μs …   6.559 ms  ┊ GC (min … max): 0.00% … 77.46%\n Time  (median):     78.204 μs               ┊ GC (median):    0.00%\n Time  (mean ± σ):   89.447 μs ± 235.344 μs  ┊ GC (mean ± σ):  8.48% ±  3.19%","category":"page"},{"location":"performance/","page":"Performance","title":"Performance","text":"The median time is about 1718 times lower in Julia as compared to R.","category":"page"},{"location":"examples/#Examples","page":"Examples","title":"Examples","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"The following examples use the Academic Performance Index (API) dataset for Californian schools.","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"svyby(formula::Symbol, by, design::svydesign, func::Function, params = [])","category":"page"},{"location":"examples/#Survey.svyby","page":"Examples","title":"Survey.svyby","text":"The svyby function can be used to generate subsets of a survey design.\n\njulia> using Survey\n\njulia> data(api);\n\njulia> dclus1 = svydesign(id=:1, weights=:pw, data = apiclus1);\n\njulia> svyby(:api00, :cname, dclus1, svymean)\n11×3 DataFrame\n Row │ cname        mean     SE\n     │ String15     Float64  Float64\n─────┼────────────────────────────────\n   1 │ Alameda      669.0    16.2135\n   2 │ Fresno       472.0     9.85278\n   3 │ Kern         452.5    29.5049\n   4 │ Los Angeles  647.267  23.5116\n   5 │ Mendocino    623.25   24.216\n   6 │ Merced       519.25   10.4925\n   7 │ Orange       710.562  28.9123\n   8 │ Plumas       709.556  13.2174\n   9 │ San Diego    659.436  12.2082\n  10 │ San Joaquin  551.189  11.578\n  11 │ Santa Clara  732.077  12.2291\n\n\n\n\n\n","category":"function"},{"location":"R_comparison/#Comparison-with-R","page":"Comparison with R","title":"Comparison with R","text":"","category":"section"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"In the following examples, we'll compare Julia's performance to R's on the same set of operations.","category":"page"},{"location":"R_comparison/#Installing-and-loading-the-package","page":"Comparison with R","title":"Installing and loading the package","text":"","category":"section"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"R","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"install.package(\"survey\")\nlibrary(survey)","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"Julia","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"using Pkg\nPkg.add(url = \"https://github.com/xKDR/Survey.jl.git\")\nusing Survey","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"The following command in the Pkg REPL may also be used to install the package.","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"add \"https://github.com/xKDR/Survey.jl.git\"","category":"page"},{"location":"R_comparison/#API-data","page":"Comparison with R","title":"API data","text":"","category":"section"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"The Academic Performance Index is computed for all California schools based on standardised testing of students. The data sets contain information for all schools with at least 100 students and for various probability samples of the data. apiclus1 is a cluster sample of school districts, apistrat is a sample stratified by stype.","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"In the following examples, we'll use the apiclus1 data from the api dataset.","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"The api dataset can be loaded using the following command:","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"R","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"data(api)","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"Julia","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"data(api)","category":"page"},{"location":"R_comparison/#svydesign","page":"Comparison with R","title":"svydesign","text":"","category":"section"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"The svydesign object combines a data frame and all the survey design information needed to analyse it.","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"A svydesign object can be constructed with the following command:","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"R","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"dclus1 <-svydesign(id = ~1, weights = ~pw, data = apiclus1, fpc = ~fpc)","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"Julia","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"dclus1 = svydesign(id = :1, weights = :pw, data = apiclus1, fpc = :fpc)","category":"page"},{"location":"R_comparison/#svyby","page":"Comparison with R","title":"svyby","text":"","category":"section"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"The svyby function can be used to generate stratified estimates.","category":"page"},{"location":"R_comparison/#Mean","page":"Comparison with R","title":"Mean","text":"","category":"section"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"Weighted mean of a variable by strata can be computed using the following command:","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"R","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"svyby(~api00, by = ~cname, design = dclus1, svymean)","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"Julia","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"svyby(:api00, :cname, dclus1, svymean)","category":"page"},{"location":"R_comparison/#Sum","page":"Comparison with R","title":"Sum","text":"","category":"section"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"Weighted sum of a variable by strata can be computed using the following command:","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"R","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"svyby(~api00, by = ~cname, design = dclus1, svytotal)","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"Julia","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"svyby(:api00, :cname, dclus1, svytotal)","category":"page"},{"location":"R_comparison/#Quantile","page":"Comparison with R","title":"Quantile","text":"","category":"section"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"Weighted quantile of a variable by strata can be computed using the following command:","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"R","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"svyby(~api00, by = ~cname, design = dclus1, svyquantile, quantile = 0.63)","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"Julia","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"svyby(:api00, :cname, dclus1, svyquantile, 0.63)","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = Survey","category":"page"},{"location":"#Survey","page":"Home","title":"Survey","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package is the Julia implementation of the Survey package in R developed by Professor Thomas Lumley.","category":"page"},{"location":"#The-need-for-moving-the-code-to-Julia.","page":"Home","title":"The need for moving the code to Julia.","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"At xKDR we processed millions of records from household surveys using the survey package in R. This process took hours of computing time. By implementing the code in Julia, we are able to do the processing in seconds. In this package we have implemented the functions svymean, svyquantile and svysum. We have kept the syntax between the two packages similar so that we can easily move our existing code to the new language.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Documentation for Survey.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [Survey]","category":"page"},{"location":"#Survey.svydesign","page":"Home","title":"Survey.svydesign","text":"The svydesign object combines a data frame and all the survey design information needed to analyse it.\n\njulia> using Survey;\n\njulia> data(api);\n\njulia> dclus1 = svydesign(id= :dnum, weights= :pw, data = apiclus1, fpc= :fpc) |> print\nSurvey Design:\nvariables: 183x44 DataFrame\nid: dnum\nstrata: 1, 1, 1 ... (length = 183)\nprobs: 0.029544719150814778, 0.029544719150814778, 0.029544719150814778 ... (length = 183)\nfpc:\n    popsize: 757, 757, 757 ... (length = 183)\n    sampsize: 183, 183, 183 ... (length = 183)\nnest: false\ncheck_strat: true\n\n\n\n\n\n","category":"type"},{"location":"#Survey.svyglm","page":"Home","title":"Survey.svyglm","text":"svyglm(formula, design, dist, link)\n\nThe svyglm function can be used to fit glms on svydesign.\n\njulia> using Survey\n\njulia> data(api);\n\njulia> dclus1 = svydesign(id=:dnum, weights=:pw, data = apiclus1);\n\njulia> svyglm(@formula(ell~meals),dclus1,Normal(),IdentityLink())\n\n\n\n\n\n\n","category":"type"},{"location":"#Survey.svyhist-Tuple{svydesign, Symbol}","page":"Home","title":"Survey.svyhist","text":"Histogram plot of a survey design variable.\n\n\n\n\n\n","category":"method"}]
}
