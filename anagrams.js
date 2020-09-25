// Given a subject, lists all possible anagrams of that subject (allow repetitions)
const anagrams = (subject) => {

    if (!subject || typeof subject !== 'string') {
        return 'You must enter a string';
    }

    if (subject.length < 2) {
        return subject;
    }

    let permutations = [];

    for (let i = 0; i < subject.length; i++) {
        let char = subject[i];

        let remainingChars = subject.slice(0, i) + subject.slice(i + 1, subject.length);

        for (let anagram of anagrams(remainingChars)) {
            permutations.push(char + anagram);
        }
    }
    return permutations;
}

console.log(anagrams('east'));
