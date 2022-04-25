var documenterSearchIndex = {"docs":
[{"location":"performance/#Performance","page":"Performance","title":"Performance","text":"","category":"section"},{"location":"performance/#Grouping-by-a-single-column","page":"Performance","title":"Grouping by a single column","text":"","category":"section"},{"location":"performance/","page":"Performance","title":"Performance","text":"R","category":"page"},{"location":"performance/","page":"Performance","title":"Performance","text":"> library(survey)\n> library(microbenchmark)\n> data(api)\n> dclus1 <- svydesign(id = ~dnum, weights = ~pw, data = apiclus1, fpc = ~fpc)\n> microbenchmark(svyby(~api00, by = ~cname, design = dclus1, svymean, keep.var = FALSE), units = \"us\")","category":"page"},{"location":"performance/","page":"Performance","title":"Performance","text":"Unit: microseconds\n                                                                   expr\n svyby(~api00, by = ~cname, design = dclus1, svymean, keep.var = FALSE)\n      min       lq     mean   median       uq      max neval\n 9427.043 10587.81 11269.22 10938.55 11219.24 17620.25   100","category":"page"},{"location":"performance/","page":"Performance","title":"Performance","text":"Julia","category":"page"},{"location":"performance/","page":"Performance","title":"Performance","text":"using Survey, BenchmarkTools      \ndata(api)\ndclus1 = svydesign(id=:dnum, weights=:pw, data = apiclus1, fpc=:fpc)\n@benchmark svyby(:api00, :cname, dclus1, svymean)","category":"page"},{"location":"performance/","page":"Performance","title":"Performance","text":"BenchmarkTools.Trial: 10000 samples with 1 evaluation.\n Range (min … max):  43.567 μs …   5.905 ms  ┊ GC (min … max): 0.00% … 90.27%\n Time  (median):     53.680 μs               ┊ GC (median):    0.00%\n Time  (mean ± σ):   58.090 μs ± 125.671 μs  ┊ GC (mean ± σ):  4.36% ±  2.00%","category":"page"},{"location":"performance/","page":"Performance","title":"Performance","text":"The median time is about 198 times lower in Julia as compared to R. ","category":"page"},{"location":"performance/#Grouping-by-two-columns.","page":"Performance","title":"Grouping by two columns.","text":"","category":"section"},{"location":"performance/","page":"Performance","title":"Performance","text":"R","category":"page"},{"location":"performance/","page":"Performance","title":"Performance","text":"> library(survey)\n> library(microbenchmark)\n> data(api)\n> dclus1 <- svydesign(id = ~dnum, weights = ~pw, data = apiclus1, fpc = ~fpc)\n> microbenchmark(svyby(~api00, by = ~cname+meals, design = dclus1, svymean, keep.var = FALSE), units = \"us\")","category":"page"},{"location":"performance/","page":"Performance","title":"Performance","text":"Unit: microseconds\n                                                                                expr\n svyby(~api00, by = ~cname + meals, design = dclus1, svymean,      keep.var = FALSE)\n      min       lq     mean   median       uq      max neval\n 120823.6 131472.8 141797.3 134375.8 140818.3 263964.3   100","category":"page"},{"location":"performance/","page":"Performance","title":"Performance","text":"Julia","category":"page"},{"location":"performance/","page":"Performance","title":"Performance","text":"using Survey, BenchmarkTools      \ndata(api)\ndclus1 = svydesign(id=:dnum, weights=:pw, data = apiclus1, fpc=:fpc)\n@benchmark svyby(:api00, [:cname, :meals], dclus1, svymean)","category":"page"},{"location":"performance/","page":"Performance","title":"Performance","text":"julia BenchmarkTools.Trial: 10000 samples with 1 evaluation.  Range (min … max):  64.591 μs …   6.559 ms  ┊ GC (min … max): 0.00% … 77.46%  Time  (median):     78.204 μs               ┊ GC (median):    0.00%  Time  (mean ± σ):   89.447 μs ± 235.344 μs  ┊ GC (mean ± σ):  8.48% ±  3.19%","category":"page"},{"location":"performance/","page":"Performance","title":"Performance","text":"The median time is about 1718 times lower in Julia as compared to R. ","category":"page"},{"location":"R_comparison/#Comparison-with-R","page":"Comparison with R","title":"Comparison with R","text":"","category":"section"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"In the following examples, we'll compare R and Julia for performing the same set of operations. ","category":"page"},{"location":"R_comparison/#Installing-and-loading-the-package","page":"Comparison with R","title":"Installing and loading the package","text":"","category":"section"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"R code","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"install.package(\"survey\")\nlibrary(survey)","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"Julia","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"using Pkg\nPkg.add(url = \"https://github.com/xKDR/Survey.jl.git\")\nusing Survey","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"The following command in the Pkg REPL may also be used to install the package. ","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"add \"https://github.com/xKDR/Survey.jl.git\"","category":"page"},{"location":"R_comparison/#API-data","page":"Comparison with R","title":"API data","text":"","category":"section"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"The Academic Performance Index is computed for all California schools based on standardised testing of students. The data sets contain information for all schools with at least 100 students and for various probability samples of the data. apiclus1 is a cluster sample of school districts, apistrat is a sample stratified by stype.","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"In the following examples, we'll use the apiclus1 data from the api dataset. ","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"The api dataset can be loaded using the following command:","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"R","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"data(api) ","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"Julia","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"data(api)","category":"page"},{"location":"R_comparison/#svydesign","page":"Comparison with R","title":"svydesign","text":"","category":"section"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"The svydesign object combines a data frame and all the survey design information needed to analyse it.","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"A svydesign object can be constructed with the following command:","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"R","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"dclus1 <-svydesign(id = ~dnum, weights = ~pw, data = apiclus1, fpc = ~fpc)","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"Julia","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"dclus1 = svydesign(id = :dnum, weights = :pw, data = apiclus1, fpc = :fpc)","category":"page"},{"location":"R_comparison/#svyby","page":"Comparison with R","title":"svyby","text":"","category":"section"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"The svyby function can be used to generate stratified estimates.","category":"page"},{"location":"R_comparison/#Mean","page":"Comparison with R","title":"Mean","text":"","category":"section"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"Weighted mean of a variable by strata can be computed using the following command: ","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"R","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"svyby(~api00, by = ~cname, design = dclus1, svymean)","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"Julia","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"svyby(:api00, :cname, dclus1, svymean)","category":"page"},{"location":"R_comparison/#Sum","page":"Comparison with R","title":"Sum","text":"","category":"section"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"Weighted sum of a variable by strata can be computed using the following command: ","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"R","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"svyby(~api00, by = ~cname, design = dclus1, svytotal)","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"Julia","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"svyby(:api00, :cname, dclus1, svytotal)","category":"page"},{"location":"R_comparison/#Quantile","page":"Comparison with R","title":"Quantile","text":"","category":"section"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"Weighted quantile of a variable by strata can be computed using the following command: ","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"R","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"svyby(~api00, by = ~cname, design = dclus1, svyquantile, quantile = 0.63)","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"Julia","category":"page"},{"location":"R_comparison/","page":"Comparison with R","title":"Comparison with R","text":"svyby(:api00, :cname, dclus1, svyquantile, 0.63)","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = Survey","category":"page"},{"location":"#Survey","page":"Home","title":"Survey","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package is the Julia implementation of the Survey package in R developed by Professor Thomas Lumley. ","category":"page"},{"location":"#The-need-for-moving-the-code-to-Julia.","page":"Home","title":"The need for moving the code to Julia.","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"At xKDR we processed millions of records from household surveys using the survey package in R. This process took hours of computing time. By implementing the code Julia, we are able to do the processing in seconds. We have implemented svymean, svyquantile and svysum function in this package. We have kept the syntax between the two packages similar so that we can easily move our existing code to the new language.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Documentation for Survey.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [Survey]","category":"page"},{"location":"#Survey.svydesign","page":"Home","title":"Survey.svydesign","text":"The svydesign object combines a data frame and all the survey design information needed to analyse it.\n\njulia> using Survey; \n\njulia> data(api); \n\njulia> dclus1 = svydesign(id= :dnum, weights= :pw, data = apiclus1, fpc= :fpc) |> print\nSurvey Design:\ndata: 183x40 DataFrame\nweights: pw\nid: dnum\nfpc: fpc\nnest: false\ncheck_strat: false\n\n\n\n\n\n","category":"type"},{"location":"#Survey.svyby","page":"Home","title":"Survey.svyby","text":"The svyby function can be used to generate stratified estimates.\n\njulia> using Survey  \n\njulia> data(api); \n\njulia> dclus1 = svydesign(id=:dnum, weights=:pw, data = apiclus1, fpc=:fpc);\n\njulia> svyby(:api00, dclus1, svymean)\n644.1693989071047\n\n\n\n\n\n","category":"function"},{"location":"#Survey.svyby-2","page":"Home","title":"Survey.svyby","text":"The svyby function can be used to generate stratified estimates.\n\njulia> using Survey      \n\njulia> data(api); \n\njulia> dclus1 = svydesign(id=:dnum, weights=:pw, data = apiclus1, fpc=:fpc); \n\njulia> svyby(:api00, :cname, dclus1, svymean)\n11×2 DataFrame\n Row │ cname        api00   \n     │ String15     Float64 \n─────┼──────────────────────\n   1 │ Alameda      669.0\n   2 │ Fresno       472.0\n   3 │ Kern         452.5\n   4 │ Los Angeles  647.267\n   5 │ Mendocino    623.25\n   6 │ Merced       519.25\n   7 │ Orange       710.563\n   8 │ Plumas       709.556\n   9 │ San Diego    659.436\n  10 │ San Joaquin  551.189\n  11 │ Santa Clara  732.077\n\n\n\n\n\n","category":"function"},{"location":"#Survey.svyby-3","page":"Home","title":"Survey.svyby","text":"The svyby function can be used to generate stratified estimates. A vector of columns can be used to groupby. \n\njulia> using Survey      \n\njulia> data(api); \n\njulia> dclus1 = svydesign(id=:dnum, weights=:pw, data = apiclus1, fpc=:fpc); \n\njulia> svyby(:api00, [:cname, :meals], dclus1, svymean)\n\n\n\n\n\n","category":"function"}]
}
