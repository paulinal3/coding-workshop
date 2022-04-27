// You are monitoring the building density in a district of houses. The district is represented as a number line, where each house is located at some integer along the line. Imagine that some of the houses are gradually being destroyed over time.

// You are given houses, an array of integers representing the initial locations of all houses in the district. You are also given queries, an array of integers representing the locations of the houses which will be destroyed, sorted by the order in which they are destroyed. After each house is destroyed, your task is to find the number of house segments remaining within the district. House segments are defined as one or more adjacent houses which do not have neighbors on either side.

// Return an array of integers representing the number of house segments after each house from queries is destroyed.

// NOTE: It's guaranteed that all houses are in distinct locations. The locations of all houses in queries are present in houses, and also distinct.

// For houses = [1, 2, 3, 6, 7, 9] and queries = [6, 3, 7, 2, 9, 1], the output should be solution(houses, queries) = [3, 3, 2, 2, 1, 0].

// For houses = [2, 4, 5, 6, 7] and queries = [5, 6, 2], the output should be solution(houses, queries) = [3, 3, 2].

function solution() {

}

// const arr = [1, 2, 3, 4, 5] 
// const  queries = [[1, 2, 4], [2, 4, 3], [1, 1, 1]]
// solution(arr, queries) //[1, 0, 0]