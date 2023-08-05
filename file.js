function percentage(obtainMarks, totalMarks) {
    return obtainMarks / totalMarks * 100;

}
const containerDiv =document.getElementById('container-div');
 
const mainDiv =document.createElement('div');
mainDiv.className='flex justify-row gap-2 mt-10'

const div1 =document.createElement('div');
div1.className='w-1/4 border-2 border-black'

const div2 =document.createElement('div');
div2.className='w-1/4 border-2 border-black'

const div3 =document.createElement('div');
div3.className='w-1/4 border-2 border-black'

const div4 =document.createElement('div');
div4.className='w-1/4 border-2 border-black'


 mainDiv.append(div1, div2, div3, div4);


function cubeValue(side) {
    return (side * side * side) < 200 ;

}
const main2Div =document.createElement('div');
main2Div.className='flex justify-row gap-2 mt-10'

const div2_1 =document.createElement('div');
div2_1.className='w-1/4 border-2 border-black'




function parallelepiped(lenght, width, height) {
    return lenght * width * height;
}

const div2_2 =document.createElement('div');
div2_2.className='w-1/4 border-2 border-black'


function regularPrism(base, height) {
    return base / height;
}

const div2_3 =document.createElement('div');
div2_3.className='w-1/4 border-2 border-black'
div2_3.innerText = regularPrism(7, 10) ;


function cylinder(pie, radiius, height) {
    return pie / radiius * radiius * height;
}

const div2_4 =document.createElement('div');
div2_4.className='w-1/4 border-2 border-black'
div2_4.innerText = cylinder(3.14, 90, 100) ;

main2Div.append(div2_1, div2_2, div2_3, div2_4);



const main3Div =document.createElement('div');
main3Div.className='flex justify-row gap-2 mt-10'

function coneOrPyramid(base, height) {
    return  base + height;
}


const div3_1 =document.createElement('div');
div3_1.className='w-1/4 border-2 border-black'
div3_1.innerText = coneOrPyramid(2, 4) ;

function sphere(pie, radiius) {
    return 4 / 3 * pie * radiius * radiius * radiius;
}
console.log() ;

const div3_2 =document.createElement('div');
div3_2.className='w-1/4 border-2 border-black'
div3_2.innerText = sphere(3.14, 70) ;


containerDiv.append(mainDiv , main2Div, main3Div);
main3Div.append(div3_1, div3_2);
