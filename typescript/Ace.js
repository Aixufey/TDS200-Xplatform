



// Rest parameter
function test(...args) {
    let [val1, val2, val3] = args;
    
    for(let arg in args) {
        //console.log(args[arg])
        if (args[arg] == 'cola') {
            console.log(`I want a ${args[arg]} please.`)
        }
    }
}


test('cola', 'pepsi', 'fanta')
