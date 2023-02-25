I created a sketch book application to let user enter the size of the sketch pad and draw on it when left click and drag the pointer.

In this application, it lets user enter a number between 10 and 100, which is the number of blocks inside the sketch pad, (note that the size of the sketch pad is a constant, only the sizes of the blocks inside it changes). A function then square the input to the total amount of blocks to be generated on the DOM tree, this will determine how many blocks are created and appended to the div inside the HTML file. The size of each blocks will then be calculated so that they will all fit inside a static sketch pad.

The most important part is the drawing function, which was programmed to listen to the mouse up, move and mouse down event and changes the CSS properties (colors) of the created blocks, thus make it looks like the user is drawing with the mouse pointer. 

On the above function, I found a way to optimize the performance of the application by using 'document create fragment', which pre-creates the blocks and hide them, only append the blocks to the DOM tree all at once when called, instead of creating them one by one as soon as the user's input was registered. This method is much more noticeable when the reset sketch pad function is used, as whenever the reset execute, it has to clear all blocks and create new blocks all over again, which takes a lot of time for the browser to process, especially when dealing with a high amount of blocks.

