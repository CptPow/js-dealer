//astrazione

//classe super
class Super {
    fnAstratto(){
        throw new Error("Metodo non importato")
    };

    fnConcreto(){
        console.log("Metodo concreto");
    }
};

//figlia di super
class figliaSuper extends Super{
    fnConcreto(){
        console.log("Astratto di figliaSuper");
    }
};

const figliaSuper1 = new figliaSuper;
console.log(figliaSuper1.fnConcreto());

const figliaSuper2 = new Super;
console.log(figliaSuper2.fnAstratto());
// console.log(figliaSuper2.fnConcreto());

