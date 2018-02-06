const test = require('tape')
const tapSpec = require('tap-spec')

const listOf = require('immutable-array.of')
const push = require('./')

const array = Object.freeze([1, 2, 3, 4, 5])
const item = 6
const otherItem = 7

test('.push', function (t) {
    t.test('create and push', function (st) {
        const list = listOf(array)
        const result = push(item, list)
        st.deepEqual(result.array, array.concat(item),
            'the result array prop is equivalent to concatenation of array and item')
        st.end()
    })
    t.test('create and push', function (st) {
        const list = listOf(array)
        const result = push(item, list)
        st.equal(list.array, result.array,
            'the result array prop is the same reference as list array prop')
        st.end()
    })
    t.test('create and push', function (st) {
        const list = listOf(array)
        const result = push(item, list)
        st.equal(list.length + 1, result.length,
            'the result length prop is one greater than list length prop')
        st.end()
    })
    t.test('create, push and push first', function (st) {
        const first = listOf(array)
        const second = push(item, first) // eslint-disable-line no-unused-vars
        const result = push(otherItem, first)
        st.deepEqual(result.array, array.concat(otherItem),
            'the result array prop is equivalent to concatenation of array and item')
        st.end()
    })
    t.test('create, push and push first', function (st) {
        const first = listOf(array)
        const second = push(item, first) // eslint-disable-line no-unused-vars
        const result = push(otherItem, first)
        st.deepEqual(result.array, array.concat(otherItem),
            'the result array prop is equivalent to concatenation of array and otherItem')
        st.end()
    })
    t.test('create, push and push first', function (st) {
        const first = listOf(array)
        const second = push(item, first) // eslint-disable-line no-unused-vars
        const result = push(otherItem, first)
        st.notEqual(result.array, first.array,
            'the result array prop is not the same reference as first array prop')
        st.end()
    })
    t.test('create, push and push first', function (st) {
        const first = listOf(array)
        const second = push(item, first)
        const result = push(otherItem, first)
        st.equal(result.length, second.length,
            'second and result have the same length')
        st.end()
    })
    t.test('create, push and push first', function (st) {
        const first = listOf(array)
        const second = push(item, first) // eslint-disable-line no-unused-vars
        const result = push(otherItem, first)
        st.equal(result.length, first.length + 1,
            'result length is one greater than first length')
        st.end()
    })

    t.test('create, push and push second', function (st) {
        const first = listOf(array)
        const second = push(item, first)
        const result = push(otherItem, second)
        st.deepEqual(result.array, array.concat(item).concat(otherItem),
            'the result array prop is equivalent to concatenation of array, item and other item')
        st.end()
    })
    t.test('create, push and push second', function (st) {
        const first = listOf(array)
        const second = push(item, first)
        const result = push(otherItem, second)
        st.deepEqual(result.length, second.length + 1,
            'the result length prop is one greater thant second length prop')
        st.end()
    })
    t.test('create, push and push second', function (st) {
        const first = listOf(array)
        const second = push(item, first)
        const result = push(otherItem, second)
        st.deepEqual(result.length, first.length + 2,
            'the result length prop is two greater thant first length prop')
        st.end()
    })
    t.test('create, push and push second', function (st) {
        const first = listOf(array)
        const second = push(item, first)
        const result = push(otherItem, second)
        st.equal(result.array, second.array,
            'the result array prop is the same reference as first array prop')
        st.end()
    })
    t.test('create, push and push second', function (st) {
        const first = listOf(array)
        const second = push(item, first)
        const result = push(otherItem, second)
        st.equal(result.array, second.array,
            'the result array prop is the same reference as second array prop')
        st.end()
    })

    t.end()
})

test.createStream()
    .pipe(tapSpec())
    .pipe(process.stdout)
