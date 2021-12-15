//const canvas = document.querySelector('#canvas');
//const width = canvas.width;
//canvas.width = 200;
//const height = canvas.height;
/*alert(width); this one use to alert the user how many px that we input in width, but normaly we rarly use it casue we have another one way
to solve it, we should use console better than this*/
/* In console we have many choice to choose but they are the same

      like log, error, warn, info, assert but it's different alittle bit is color
*/

//console.log('Width of canvas: ',width);
//console.log('Height of canvas: ',height)

//if (!canvas.getContext){
 //   alert("your browser doesn't support 2d drawing");
//}
//let ctx = canvas.getContext('2d');
//ctx.fillStyle = "#F9DC5C";
//ctx.fillRect(100, 100, 150, 100);
//ctx.fillStyle = "#A9DC5C";
//ctx.fillRect(150, 150, 150, 100);

//var varaibleName = "hello"; //type: string
//var varaibleName = 1 ; //type: number

//var varaibleNme = "test";
//console.log(typeof(varaibleNme));
function run(){
    var foo = "Foo";
    var bar = "Bar";
    console.log(foo, bar);// Foo bar
    {
        var moo = "Moo";
        let baz = "Baz";
        console.log(moo, baz);
    }
    console.log(moo);
    console.log(baz);
}

run();