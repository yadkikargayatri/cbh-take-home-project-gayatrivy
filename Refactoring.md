# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
We used the variable TRIVIAL_PARTITION_KEY only for the initialization of the candidate. There is no other use of TRIVIAL_PARTITION_KEY.
Therefore, I removed it and directly initialized the candidate variable. This step makes code more understandable since it has less number of variables. Further, in the original code, we are updating the candidate variable value based on the condition, and if those conditions are not satisfied, then we are initializing the candidate to TRIVIAL_PARTITION_KEY. This is not a good coding practice. I initialize the candidate to TRIVIAL_PARTITION_KEY, which is "0" and then update its value based on the if condition. Even if conditions are not satisfied,
I will still be using the initialized value of the candidate. Moreover, we are checking the type of candidate variable outside the if(event) brackets.
The problem here is if the event is null, the candidate will not be set, and thus to check the candidate type, we need to perform an extra check whether the candidate has been created. Inside the if(event) block, the code always modifies the candidate irrespective of partitionKey. Hence, I moved the type check of the candidate inside the if(event) block. Note that even if the event is null, we have initialized the candidate to "0" which is a string, and thus we need not perform a type check in this case.