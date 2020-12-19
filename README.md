# arrayintersection
function that returns the elements that exists in two arrays in linear time

The Big O notation for this function is O(n), it depends on the size of the array executedSize parameter.

We traverse the executedSize array and with every element we check the failedRules which we transform into a Set to see if the item exists.
The lookup time for a value in a set is 1, this way we can achieve the O(n) for the whole process.