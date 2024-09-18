window.addEventListener('scroll', function() {
    let scrollPos = window.scrollY;
    let windowHeight = window.innerHeight;

    // Get images and text elements
    let firstImage = document.getElementById('hawaiian-lovers-blurred');
    let secondImage = document.getElementById('hawaiian-lovers-clear');
    let anotherImage = document.getElementById('hawaiian-lovers-kiss');
    let thirdImage = document.getElementById('hawaiian-lovers-intimate');

    let firstLine = document.getElementById('first-line');
    let secondLine = document.getElementById('second-line');
    let anotherLine = document. getElementById('another-line');
    let thirdLine = document.getElementById('third-line');
    let bookTitle = document.getElementById('book-title');

    // Section 1 - Unblur the first image as you scroll down
    if (scrollPos < windowHeight) {
        firstImage.classList.add('unblur');
        secondImage.classList.remove('unblur');
        anotherImage.classList.remove('unblur');
        thirdImage.classList.remove('unblur');
        secondLine.classList.add('hidden');
        anotherLine.classList.add('hidden');
        thirdLine.classList.add('hidden');
        bookTitle.classList.add('hidden');
    }

    // Section 2 - Unblur the second image and show the second line
    if (scrollPos >= windowHeight && scrollPos < windowHeight * 2) {
        firstImage.classList.remove('unblur');
        secondImage.classList.add('unblur');
        anotherImage.classList.remove('unblur');
        thirdImage.classList.remove('unblur');
        secondLine.classList.add('hidden');  // Ensure it is hidden on scroll
        anotherLine.classList.add('hidden');
        thirdLine.classList.add('hidden');
        bookTitle.classList.add('hidden');
    }

     // Section 3 - Unblur another section that added later 
     if (scrollPos > windowHeight*2 && scrollPos < windowHeight * 3) {
        secondImage.classList.remove('unblur');
        anotherImage.classList.add('unblur');
        thirdImage.classList.remove('unblur');
        secondLine.classList.add('hidden');  
        anotherLine.classList.add('hidden');
        thirdLine.classList.add('hidden');
        bookTitle.classList.add('hidden');
    }
    // Section 3 - Unblur the third image and show the third line and book title
    if (scrollPos >= windowHeight * 3) {
        anotherImage.classList.remove('unblur');
        thirdImage.classList.add('unblur');
        secondLine.classList.add('hidden');
        anotherLine.classList.add('hidden');  
        thirdLine.classList.add('hidden');
        bookTitle.classList.add('hidden');
    }
});

// Add click events for text positioning and appearance
document.getElementById('hawaiian-lovers-blurred').addEventListener('click', function() {
    let firstLine = document.getElementById('first-line');
    firstLine.classList.toggle('hidden');
    firstLine.classList.toggle('visible');
});

document.getElementById('hawaiian-lovers-clear').addEventListener('click', function() {
    let secondLine = document.getElementById('second-line');
    secondLine.classList.toggle('hidden');
    secondLine.classList.toggle('visible');
});

document.getElementById('hawaiian-lovers-kiss').addEventListener('click', function() {
    let anotherLine = document.getElementById('another-line');
    anotherLine.classList.toggle('hidden');
    anotherLine.classList.toggle('visible');
});

document.getElementById('hawaiian-lovers-intimate').addEventListener('click', function() {
    let thirdLine = document.getElementById('third-line');
    let bookTitle = document.getElementById('book-title');
    thirdLine.classList.toggle('hidden');
    thirdLine.classList.toggle('visible');
    bookTitle.classList.toggle('hidden');
    bookTitle.classList.toggle('visible');
});