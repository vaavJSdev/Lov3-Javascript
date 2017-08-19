// PUSP function for understanding:
// Array Push, Unshift, Shift and Pop methods.

function pusp(ar,e,i) {
	if(!arguments.length){
		console.log("Format: |array|element|type|");
		console.log("Type: |0-push|-|1-pop|-|2-unshift|-|3-shift|");
		console.log('More: pusp("man")');
	} else if(arguments[0] ==="man") {
		console.log("┌-------------------------------------------------------┐");
		console.log("|                      More   Help                      |");
		console.log("|-------------------------------------------------------|");
		console.log("|              pusp(array,desireElement(x),Type)        |");
		console.log("|-------------------------------------------------------|");
		console.log("|                 array    =    [0,1,2,3,4,5]           |"); 
		console.log("|-------------------------------------------------------|");
		console.log("| Type     |         array         |       Result       |");
		console.log("|----------|-----------------------|--------------------|");
		console.log("| Push     |     [0,1,2,3,4,5]<-x- |  [0,1,2,3,4,5,x]   |");
		console.log("| Pop      |     [0,1,2,3,4,x]-x-> |  [0,1,2,3,4]       |");
		console.log("| UnShift  | -x->[0,1,2,3,4,5]     |  [x,1,2,3,4,5,6,7] |");
		console.log("| Shift    | <-x-[x,1,2,3,4,5]     |  [1,2,3,4,5,6]     |");
		console.log("└-------------------------------------------------------┘");
	} else {
		let array;
		switch(i) {
			case 0:
				ar.push(e);
				return ar;
				break;
			case 1:
				ar.pop(e);
				return ar;
				break;
			case 2:
				ar.unshift(e);
				return ar;
				break;
			case 3:
				ar.shift(e);
				return ar;
				break;
			default: 
				console.log("Format: |array|elemento|tipo|");
				console.log("Type: |0-push|-|1-pop|-|2-unshift|-|3-shift|");
				console.log('More: pusp("man");');
		}
	}
}
