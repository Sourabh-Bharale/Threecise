export let welcome = true;
export const changeWelcome = () => {
    welcome = false;
}

export const colors = ['#0096FF', '#FFCF23', '#64D6E2', '#EF9F64', '#9988CD', '#A500F2', '#EC7272', '#B9FFF8', '#F94892', '#A66CFF', '#FD5D5D', '#FF8FB1', '#0096FF'];

export const dances = ["Dance", "Thriller Moves", "Squats", "Hip Hop", "Fun Moves", "Excercises", "Excercise", "Dance", "Thriller", "Squats", "Hip Hop", "Fun Moves", "Excercises"];
export const pages = ['dance', 'thriller', 'squats', 'hiphop', 'funMoves', 'excercises', 'excercise', 'dance', 'thriller', 'squats', 'hiphop', 'funMoves', 'excercises']

export const danceActions ={
    "dance":["idle", "Belly Dance", "Shopping Cart ", "Break Dance1", "Dance Tweark", "Flair", "Gagnam Style", "House Dance", "Silly", "Soul Spin Combo"],
    "exercise":["idle", "Bicycle Crunch", "Burpee", "Cartwheel", "Jump Pushup", "Pike Walk", "Piston", "Pushup", "Quick Steps", "Situps", "Snatch", "Sumo High Pull"],
    "funMoves":["idle","Rumba","Salsa","Samba","Swing 1","Swing 2","Swing 3","YMCA"],
    "hipHop":["idle","Bboy Hip Hop","Hip Hop 1","Hip Hop 2","Hip Hop 3","Robot Hip Hop","Snake Hip Hop","Tut Hip Hop","Wave Hip Hop"],
    "squats":["idle","Air Squats","Air Squats Bent Arms","Back Squats End","Back Squats Mid","Back Squats Start","Overhead Squats End","Overhead Squats Mid","Overhead Squats Start"],
    "thriller":["idle","Thriller Move 1","Thriller Move 2"]    
}


export const c1 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
export const c2 = [2, 3, 1, 5, 4, 4, 5, 3, 2, 1]
export const c3 = [5, 4, 2, 3, 1, 1, 3, 4, 2, 2]
export const opac = [0.5, 0.4, 1, 0.3, 0.1, 0.1, 0.3, 0.4, 1, 0.2]

export const backgroundCircles = [
    {
        height: 900,
        numberOfItems: 5,
    },
    {
        height: 800,
        numberOfItems: 7,
    },
    {
        height: 860,
        numberOfItems: 7,
    }
]

export let mousePositionX = 0;
export let mousePositionY = 0;
export const setMousePosition = (x, y) => {
    mousePositionX = x;
    mousePositionY = y;
}


const actions = ["idle", "Belly Dance", "Shopping Cart ", "Break Dance1", "Dance Tweark", "Flair", "Gagnam Style", "House Dance", "Silly", "Soul Spin Combo"]

export let currentDance = 0;
export const nextDance=(index)=>{
    var l = index + 1;
    if (l == 10) {
        currentDance = 0
    }
    else{
        currentDance = l
    }
}

export const previousDance=(index)=>{
    var l = index - 1;
    if (l == -1) {
        currentDance = 9

    }
    else{
        currentDance = l
    }
}

export let currentExercise = 0;
export const nextExercise=(index)=>{
    var l = index + 1;
    if (l == 12) {
        currentExercise = 0

    }
    else{
        currentExercise = l
    }
}
export const previousExercise=(index)=>{
    var l = index - 1;
    if (l == -1) {
        currentExercise = 11

    }
    else{
        currentExercise = l
    }
}



export let currentFunMoves = 0;
export const nextFunMoves=(index)=>{
    var l = index + 1;
    if (l == 8) {
        currentFunMoves = 0

    }
    else{
        currentFunMoves = l
    }
}

export const previousFunMoves=(index)=>{
    var l = index - 1;
    if (l == -1) {
        currentFunMoves = 7
    }
    else{
        currentFunMoves = l
    }
}



export let currentHipHop = 0;
export const nextHipHop=(index)=>{
    var l = index + 1;
    if (l == 9) {
        currentHipHop = 0
    }
    else{
        currentHipHop = l
    }
}

export const previousHipHop=(index)=>{
    var l = index - 1;
    if (l == -1) {
        currentHipHop = 8
    }
    else{
        currentHipHop = l
    }
}


export let currentSquats = 0;
export const nextSquats=(index)=>{
    var l = index + 1;
    if (l == 9) {
        currentSquats = 0
    }
    else{
        currentSquats = l
    }
}

export const previousSquats=(index)=>{
    var l = index - 1;
    if (l == -1) {
        currentSquats = 8
    }
    else{
        currentSquats = l
    }
}


export let currentThriller = 0;
export const nextThriller=(index)=>{
    var l = index + 1;
    if (l == 3) {
        currentThriller = 0
    }
    else{
        currentThriller = l
    }
}

export const previousThriller =(index)=>{
    var l = index - 1;
    if (l == -1) {
        currentThriller = 2
    }
    else{
        currentThriller = l
    }
}