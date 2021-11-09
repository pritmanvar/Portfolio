const role = document.querySelector('.role'); // get reference to the text

// various roles.
let roles = ["Web Developer.", "Competitive Programmer.", "Tech Enthsiast."]

write(0); // to write Web Developer
setTimeout(() => { // to write Competitive Programmer
    write(1);
}, 3000);
setTimeout(() => { // to write Tech Enthsiast
    write(2);
}, 7800);

// it will write all roles at particular time interval.
setInterval(() => {
    write(0);
    setTimeout(() => {
        write(1);
    }, 3000);
    setTimeout(() => {
        write(2);
    }, 7800);
}, 11000 );

// function to write and erase roles.
function write(i) {
    let j = 0;
    let increase = true;
    let word = setInterval(() => {
        if(j < roles[i].length && increase == true){ // to write role
            role.innerHTML = roles[i].substr(0,j+1);
            j++;
        }else if(j >= 0){ // to erase role
            increase = false;
            role.innerHTML = roles[i].substr(0,j);
            j--;
        }else{ // to clear time interval.
            clearInterval(word);
        }
    }, 100);
}