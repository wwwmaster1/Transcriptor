let minimizedMode = false;
let autoScroll = true;
let doubleClick = false;
let webMonetization = false;
let playOnClick = true;

new HyperaudioLite("hypertranscript", "hyperplayer", minimizedMode, autoScroll, doubleClick, webMonetization, playOnClick);
let cap1 = caption();
cap1.init("hypertranscript", "hyperplayer", '0', '0'); // transcript Id, player Id, max chars, min chars for caption line

function onDragStart(theEvent) {
    console.log(theEvent)
}

function deleteX(divider) {
    const pipe = divider.parentNode;
    
    let curr,
        next,
        currSpeaker,
        nextSpeaker,
        currPipe = pipe;

    while (true) {
        curr = joinSentences(currPipe);
        currSpeaker = curr.classList[0];
    
        // Move pipe focus to next pipe
        currPipe = curr.nextElementSibling;
        next = currPipe.nextElementSibling;
        nextSpeaker = next.classList[0];
    
        if (currSpeaker != nextSpeaker) {
            break;
        }
    }
}

/**
 * Join Sentences around pipe
 * @param {elem} pipe Current pipe element
 * @returns {elem} Return current joined element for focus
 */
function joinSentences(pipe) {
    let prev = pipe.previousElementSibling;
    let next = pipe.nextElementSibling;

    // Remove speaker thumnail
    next.firstElementChild.remove();
    
    // Join next conversation to previous conversation
    prev.innerHTML += next.innerHTML;
    next.outerHTML = '';

    // Remove current pipe
    pipe.outerHTML = '';

    return prev;
}

function test() {
    const pipe = document.querySelector("#hypertranscript > span:nth-child(4)");

    
}

test()