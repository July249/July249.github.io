---
layout: post
title: "[초보자를 위한 파이썬 300제] 051~070"
subtitle:
categories: dev
tags: dev python beginner
comments: true
published: true
---

## 051 ~ 070

### 51. 리스트 생성

영화 제목을 movie_rank 이름의 리스트에 저장해보세요.(순위는 저장하지 않습니다.)

```python
movie_rank = ['닥터 스트레인지', '스플릿', '럭키']
print(movie_rank)

>>> ['닥터 스트레인지', '스플릿', '럭키']
```

### 52. 리스트에 원소 추가

51의 movie_rank 리스트에 "배트맨"을 추가하라.

```python
movie_rank.append("배트맨")
print(movie_rank)

>>> ['닥터 스트레인지', '스플릿', '럭키', '배트맨']
```

**주의! 52번 cell을 한번 run하면 '배트맨'은 리스트에 한번 추가됩니다. 하지만, 또 한번 더 run하면 '배트맨'이 해당 리스트에 두번 입력됩니다.**

### 53. 리스트에 원소 추가

movie_rank 리스트에는 아래와 같이 4개의 영화 제목이 바인딩되어 있다. "슈퍼맨"을 "닥터 스트레인지"와 "스플릿" 사이에 추가하라.

```python
movie_rank.insert(1, "슈퍼맨")
print(movie_rank)

>>> ['닥터 스트레인지', '슈퍼맨', '스플릿', '럭키', '배트맨']
```

### 54. movie_rank 리스트에서 "럭키"를 삭제하라.

```python
#movie_rank.remove("럭키")
del movie_rank[3]
print(movie_rank)

>>> ['닥터 스트레인지', '슈퍼맨', '스플릿', '배트맨']
```

**What is the difference between remove, del and pop in Python?**
> 1. `.remove()`
> `.remove()` removes the first matching value/object. It does not do anything with the indexing.
> 
>```
> myList = [1, 2, 3, 2]
>
> myList.remove(2)
>
> print(myList)
> 
> # Output: [1, 3, 2]
> ```
> 
> If you want to remove all the occurrences of an element in the list, you need to loop over all elements. Check the element and remove it if it is present.

> 2. del list[]
> `del` removes the item at a specific index.
>
> ```
> myList = [3, 2, 2, 1]
>
> del myList[1]
>
> print(myList)
> 
> # Output: [3, 2, 1]
> ```
> Note: You can also delete the entire list using del keyword.

> 3. `.pop()`
> `.pop()` removes the item at a specific index and returns it.
>
> ```
> myList = [4, 3, 5]
>
> myList.pop(1)
> 
> print(myList)
>
> # Output: [4, 5]
> ```

**Difference between `.remove()`, `del` and `.pop()` in Python list**

  + `.remove()` delete the matching element/object whereas `del` and `.pop()` removes the element a specific index.
  + `del` and `.pop()` deals with the index. The only difference between the two is that - `.pop()` return deleted the value from the list and `del` does not return anything.  
  + `.pop()` is the only way that returns the object.
  + `.remove()` is the only one that searches objects (not index).

**Which is the best way to delete the element in the List?**

  + If you want to delete a specific object in the list, use `.remove()` method.
  + If you want to delete the object at a specific location (index) in the list, you can either use or `.pop()`.
  + Use the `.pop()`, if you want to delete and get the object at the specific location.

**Note**

  + You don't need to import any extra module to use these methods to remove an element from the list.
  + You can not use these methods with a tuple as "Python tuple is different from the list."

### 55. movie_rank 리스트에서 "스플릿"과 "배트맨"을 삭제하라.

```python
movie_rank = ['닥터 스트레인지', '슈퍼맨', '스플릿', '배트맨']
# 리스트에서 어떤 값을 삭제하면 남은 값들은 새로 인덱싱됩니다.
# 따라서 여러 값을 삭제할 때는 어떤 값이 먼저 삭제된 후 남은 원소들에 대해서 순서를 새로 고려한 후 삭제해야합니다.
del movie_rank[2]
del movie_rank[2]
print(movie_rank)

>>> ['닥터 스트레인지', '슈퍼맨']
```

### 56. lang1과 lang2 리스트가 있을 때 lang1과 lang2의 원소를 모두 갖고 있는 langs 리스트를 만들어라.

```python
lang1 = ["C", "C++", "JAVA"]
lang2 = ["Python", "Go" "C#"]
langs = lang1 + lang2
print(langs)

>>> ['C', 'C++', 'JAVA', 'Python', 'GoC#']
```

### 57. 다음 리스트에서 최댓값과 최솟값을 출력하라.

```python
nums = [1, 2, 3, 4, 5, 6, 7]
min_nums = min(nums)
max_nums = max(nums)
print("min:", min_nums)
print("max:", max_nums)
#print("min: " + str(min_nums))
#print("max: " + str(max_nums))

>>> min: 1
>>> max: 7
```

### 58. 다음 리스트의 합을 출력하라.

```python
nums = [1, 2, 3, 4, 5]
print(sum(nums))

>>> 15
```

### 59. 다음 리스트에 저장된 데이터의 개수를 화면에 표시하라.

```python
cook = ["피자", "김밥", "만두", "양념치킨", "족발", "피자", "김치만두", "쫄면", "소시지", "라면", "팥빙수", "김치전"]
print(len(cook))

>>> 12
```

### 60. 다음 리스트의 평균을 출력하라.

```python
nums = [1, 2, 3, 4, 5]
print(sum(nums)/len(nums))

>>> 3.0
```

### 61. price 변수에는 날짜와 종가정보가 저장되어 있다. 날짜 정보를 제외하고 가격정보만을 출력하라. (힌트: 슬라이싱)

```python
price = ['20180728', 100, 130, 140, 150, 160, 170]
print(price[1:])

>>> [100, 130, 140, 150, 160, 170]
```

### 62. 슬라이싱을 사용해서 홀수만 출력하라.

```python
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(nums[::2])

>>> [1, 3, 5, 7, 9]
```

### 63. 슬라이싱을 사용해서 짝수만 출력하라.

```python
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(nums[1::2])

>>> [2, 4, 6, 8, 10]
```

### 64. 슬라이싱을 사용해서 리스트의 숫자를 역방향으로 출력하라.

```python
nums = [1, 2, 3, 4, 5]
print(nums[::-1])

>>> [5, 4, 3, 2, 1]
```

### 65. interest 리스트에는 아래의 데이터가 바인딩되어 있다.

```python
interest = ['삼성전자', 'LG전자', 'Naver']

# interest 리스트를 사용하여 아래와 같이 화면에 출력하라.
# 삼성전자 Naver

print(interest[0], interest[2])

>>> 삼성전자 Naver
```

### 66. join method
 
interest 리스트에는 아래의 데이터가 바인딩되어 있다.

```python
interest = ['삼성전자', 'LG전자', 'Naver', 'SK하이닉스', '미래에셋대우']
```

interest 리스트를 사용하여 아래와 같이 화면에 출력하라.

```python
print(' '.join(interest))

>>> 삼성전자 LG전자 Naver SK하이닉스 미래에셋대우
```

### 67. join method

```python
interest = ['삼성전자', 'LG전자', 'Naver', 'SK하이닉스', '미래에셋대우']
print("/".join(interest))

>>> 삼성전자/LG전자/Naver/SK하이닉스/미래에셋대우
```

### 68. join method

interest 리스트에는 아래의 데이터가 바인딩되어 있다.

```python
interest = ['삼성전자', 'LG전자', 'Naver', 'SK하이닉스', '미래에셋대우']
```

join() 메서드를 사용해서 interest 리스트를 아래와 같이 화면에 출력하라.

```python
print("\n".join(interest))

>>> 삼성전자
>>> LG전자
>>> Naver
>>> SK하이닉스
>>> 미래에셋대우
```

### 69. 문자열 split method

회사 이름이 슬래시("/")로 구분되어 하나의 문자열로 저장되어 있다.

```python
string = "삼성전자/LG전자/Naver"
```

이를 interest 이름의 리스트로 분리 저장하라.

```python
print(string.split("/"))

>>> ['삼성전자', 'LG전자', 'Naver']
```

### 70. 리스트 정렬

리스트에 있는 값을 오름차순으로 정렬하세요.

```python
data = [2, 4, 3, 1, 5, 10, 9]
data.sort()
print(data)
data2 = sorted(data)
print(data2)

>>> [1, 2, 3, 4, 5, 9, 10]
>>> [1, 2, 3, 4, 5, 9, 10]
```

**What is the difference between `.sort()` and `sorted()` in Python?**

In Python, sorting is easily done with the built-in methods `.sort()` and `sorted()`.

The `sorted()` and `.sort()` methods sort the given sequence in either ascending or descending order.

> 1. `sorted()`
> This method doesn't change the original list.
>
> + Return Type: returns a sorted list.
>
> + Iterable: It can be operated on any sequence (list, tuple, string), collection (dictionary, set, frozenset), or other iterator that needs to be sorted.

> 2. `.sort()`
> This method makes changes to the original sequence.
>
> + Return Type: returns none, has no return value.
>
> + `.sort()` is a method of the list class, so it can only be used with lists.

