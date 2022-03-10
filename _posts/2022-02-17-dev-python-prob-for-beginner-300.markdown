---
layout: post
title: "[초보자를 위한 파이썬 300제] 291~300"
subtitle:
categories: dev
tags: dev python beginner
comments: true
published: true
---

## 291 ~ 300
---

**Notice**: 291번부터 300번에 이르는 문제들은 Python CLI 또는 VScode를 이용하여 코드를 실행하서야 올바른 결과가 나올 수 있습니다. Google에서 제공하는 Colab Notebook을 사용하시는 경우에는 에러 메시지가 나타날 수 있습니다.

### 291. 파일 쓰기

바탕화면에 '매수종목1.txt' 파일을 생성한 후 다음과 같이 종목코드를 파일에 써보세요.

```python
005930
005380
035420
```

---

Answer:

```python
f = open("C:/Users/hyunh/Desktop/매수종목1.txt", mode="wt", encoding="utf-8")
f.write("005930\n")
f.write("005380\n")
f.write("035420")
f.close()
```

### 292. 파일 쓰기

바탕화면에 '매수종목2.txt' 파일을 생성한 후 다음과 같이 종목코드와 종목명을 파일에 써보세요.

```python
005930 삼성전자
005380 현대차
035420 NAVER
```

---

Answer:

```python
f = open("C:/Users/hyunh/Desktop/매수종목2.txt", mode="wt", encoding="utf-8")
f.write("005930 삼성전자\n")
f.write("005380 현대차\n")
f.write("035420 NAVER\n")
f.close()
```

### 293. CSV 파일 쓰기

바탕화면에 '매수종목.csv' 파일을 생성한 후 다음과 같이 종목코드와 종목명을 파일에 써보세요. 인코딩은 'cp949'를 사용해야합니다.

|종목명	|종목코드	|PER |
|:--:|:--:|:--:|
|삼성전자	|005930	|15.79 |
|NAVER	|035420	|55.82 |

---

Answer:

```python
import csv

f = open("C:/Users/hyunh/Desktop/매수종목.csv", mode="wt", encoding="cp949", newline='')
writer = csv.writer(f)
writer.writerow(["종목명", "종목코드", "PER"])
writer.writerow(["삼성전자", "005930", 15.59])
writer.writerow(["NAVER", "035420", 55.82])
f.close()
```

### 294 파일 읽기

바탕화면에 생성한 '매수종목1.txt' 파일을 읽은 후 종목코드를 리스트에 저장해보세요.

```python
005930
005380
035420
```

---

Answer:

```python
f = open("C:/Users/hyunh/Desktop/매수종목1.txt", encoding="utf-8")
lines = f.readlines()   # python list

codes = []
for line in lines:
    code = line.strip()  #'\n'
    codes.append(code)

print(codes)

f.close()
```

### 295. 파일 읽기

바탕화면에 생성한 '매수종목2.txt' 파일을 읽은 후 종목코드와 종목명을 딕셔너리로 저장해보세요. 종목명을 key로 종목명을 value로 저장합니다.

```python
005930 삼성전자
005380 현대차
035420 NAVER
```

---

Answer:

```python
f = open("C:/Users/hyunh/Desktop/매수종목2.txt", encoding="utf-8")
lines = f.readlines()

data = {}
for line in lines:
    line = line.strip()     # '\n' 제거
    k, v = line.split()
    #print(k, v)
    data[k] = v

print(data)
f.close()
```

### 296. 예외처리

문자열 PER (Price to Earning Ratio) 값을 실수로 변환할 때 에러가 발생합니다. 예외처리를 통해 에러가 발생하는 PER은 0으로 출력하세요.

```python
per = ["10.31", "", "8.00"]
```

```python
for i in per:
    print(float(i))
```

---

Answer:

```python
per = ["10.31", "", "8.00"]

for i in per:
    try:
        print(float(i))
    except:
        print(0)
```

### 297. 예외처리 및 리스트에 저장

문자열로 표현된 PER 값을 실수로 변환한 후 이를 새로운 리스트에 저장해보세요.

```python
per = ["10.31", "", "8.00"]
```

```python
for i in per:
    print(float(per))
```

---

Answer:

```python
per = ["10.31", "", "8.00"]
new_per = []

for i in per:
    try:
        v = float(i)
    except:
        v = 0
    new_per.append(v)

print(new_per)
```

### 298. 특정 예외만 처리하기

어떤 값을 0으로 나누면 ZeroDivisionError 에러가 발생합니다. try ~ except로 모든 에러에 대해 예외처리하지 말고 ZeroDivisionError 에러만 예외처리해보세요.

---

Answer:

```python
try:
    b = 3 / 0
except ZeroDivisionError:
    print("0으로 나누면 안되요")
```
        
### 299. 예외의 메시지 출력하기

다음과 같은 코드 구조를 사용하면 예외 발생 시 에러 메시지를 변수로 바인딩할 수 있습니다.

```python
try:
    실행코드
except 예외 as 변수:
    예외처리코드
```

리스트의 인덱싱에 대해 에러를 출력해보세요.

```python
data = [1, 2, 3]

for i in range(5)
    print(data[i])
```

---

Answer:

```python
data = [1, 2, 3]

for i in range(5):
    try:
        print(data[i])
    except IndexError as e:
        print(e)
```

### 300. try, except, else, finally 구조 사용해보기

파이썬 예외처리는 다음과 같은 구조를 가질 수 있습니다.

```python
try:
    실행 코드
except:
    예외가 발생했을 때 수행할 코드
else:
    예외가 발생하지 않았을 때 수행할 코드
finally:
    예외 발생 여부와 상관없이 항상 수행할 코드
```

아래의 코드에 대해서 예외처리를 사용하고 try, except, else, finally에 적당한 코드를 작성해봅시다. else와 finally는 적당한 문구를 print하시면 됩니다.

```python
per = ["10.31", "", "8.00"]

for i in per:
    print(float(per))
```

---

Answer:

```python
per = ["10.31", "", "8.00"]

for i in per:
    try:
        print(float(i))
    except:
        print(0)
    else:
        print("clean data")
    finally:
        print("변환 완료")
```
