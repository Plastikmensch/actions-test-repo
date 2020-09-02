/* This file includes 5 lint errors */

for (let i=0; i < 50; i++) {
    // this comment doesn't violate lines-around-comments
    console.log(i)
    // this comment does violate lines-around-comments

    // this console.log violates indent and quotes rules
  console.log("i is something between 0 and 50")

    // this switch violates default-case-last rule introduced in eslint v7
    switch (i) {
        default:
            console.log('i isn\'t 25')
            break
        case 25:
            // this console.log violates semi rule
            console.log('i is 25');
    }
}
