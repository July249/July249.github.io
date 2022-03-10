---
layout: post
title: "[초보자를 위한 파이썬 300제] 241~250"
subtitle:
categories: dev
tags: dev python beginner
comments: true
published: true
---

## 241 ~ 250
---

### 241. 현재시간

datetime 모듈을 사용해서 현재 시간을 화면에 출력해보세요.

---

```python
import datetime

now = datetime.datetime.now()

print(now)

>>> 2022-02-05 15:27:21.506818
```

### 242. 현재시간의 타입

datetime 모듈의 now 함수의 리턴 값의 타입을 화면에 출력해보세요.

---

```python
import datetime

now = datetime.datetime.now()

print(now, type(now))

>>> 2022-02-05 15:28:39.542677 <class 'datetime.datetime'>
```

### 243 timedelta

datetime 모듈의 timedelta를 사용해서 오늘로부터 5일, 4일, 3일, 2일, 1일 전의 날짜를 화면에 출력해보세요.

---

```python
import datetime

now = datetime.datetime.now()

for day in range(5, 0, -1): # 5를 제외한 4, 3, 2, 1, 31일 날짜를 돌리게 됨
  delta = datetime.timedelta(days=day)
  date = now - delta
  print(date)
  
>>> 2022-01-31 15:30:25.134296
>>> 2022-02-01 15:30:25.134296
>>> 2022-02-02 15:30:25.134296
>>> 2022-02-03 15:30:25.134296
>>> 2022-02-04 15:30:25.134296
```

### 244 strftime

현재시간을 얻어온 후 다음과 같은 포맷으로 시간을 출력해보세요. strftime 메서드를 사용하세요.

18:35:01

---

```python
import datetime

now = datetime.datetime.now()

print(now.strftime("%H:%M:%S"))

>>> 15:32:59
```

### 245. strptime

datetime.datetime.strptime 메서드를 사용하면 문자열 형식의 시간을 datetime.datetime 타입의 시간 값으로 만들어줍니다. "2020-05-04"의 문자열을 시간 타입으로 변환해보세요.

---

```python
import datetime

day = "2020-05-04"
ret = datetime.datetime.strptime(day, "%Y-%m-%d")
print(ret, type(ret))

>>> 2020-05-04 00:00:00 <class 'datetime.datetime'>
```

### 246. sleep 함수

time 모듈, datetime 모듈을 사용해서 1초에 한 번 현재 시간을 출력하는 코드를 작성하세요.

---

```python
import time
import datetime

while True:
  now = datetime.datetime.now()
  print(now)
  time.sleep(1)

>>> 2022-02-05 15:38:59.161496
>>> 2022-02-05 15:39:00.165991
>>> 2022-02-05 15:39:01.167306
>>> 2022-02-05 15:39:02.168676
>>> 2022-02-05 15:39:03.170055
>>> 2022-02-05 15:39:04.171404
>>> 2022-02-05 15:39:05.172744
>>> 2022-02-05 15:39:06.174144
>>> 2022-02-05 15:39:07.175526
>>> 2022-02-05 15:39:08.176964
>>> 2022-02-05 15:39:09.178251
>>> 2022-02-05 15:39:10.179534
>>> 2022-02-05 15:39:11.180799
>>> 2022-02-05 15:39:12.182271
>>> 2022-02-05 15:39:13.183564
>>> 2022-02-05 15:39:14.184918
>>> 2022-02-05 15:39:15.186289
>>> 2022-02-05 15:39:16.187029
>>> 2022-02-05 15:39:17.188375
>>> 2022-02-05 15:39:18.189856
>>> 2022-02-05 15:39:19.191187
>>> 2022-02-05 15:39:20.192439
>>> 2022-02-05 15:39:21.193700
>>> 2022-02-05 15:39:22.195124
---------------------------------------------------------------------------
KeyboardInterrupt                         Traceback (most recent call last)
<ipython-input-9-7f5678a25693> in <module>()
      5   now = datetime.datetime.now()
      6   print(now)
----> 7   time.sleep(1)

KeyboardInterrupt: 
```

### 247. 모듈 import

모듈을 import하는 4가지 방식에 대해 설명해보세요.

---

**모듈을 import 하는 4가지 방법**

(1) `import` + 모듈명

(2) `from` + 모듈명 + `import` + 함수명

  + 장점: 함수 이름만으로도 바로 함수 호출이 가능하여 코드의 수가 줄어든다.

  + 단점: 기존에 선언된 변수나 함수와 이름이 충돌할 가능성이 있다.(잠재적 버그의 위험성이 존재)

(3) `from` + 모듈명 + `import` + `*`: 해당 모듈 내의 모든 것을 import하라!

(4) `import` + 모듈명 + `as` + 항목명

  + ex) import pandas as pd: pandas 모듈을 pd로 import 하라! >> pandas 내의 함수를 호출할 때 pd.`함수명`으로 하면 된다.

### 249. rename 함수

바탕화면에 텍스트 파일을 하나 생성한 후 os 모듈의 rename 함수를 호출하여 해당 파일의 이름을 변경해보세요.

---

```python
import os

os.rename("C:/Users/hyunh/Desktop/before.txt")
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-10-b7ce3a857839> in <module>()
      1 import os
      2 
----> 3 os.rename("C:/Users/hyunh/Desktop/before.txt")

TypeError: rename() missing required argument 'dst' (pos 2)
```

### 250. numpy

numpy 모듈의 arange 함수를 사용해서 0.0부터 5.0까지 0.1씩 증가하는 값을 화면에 출력하시오.

---

```python
import numpy

for i in numpy.arange(0, 5, 0.1):
  print(i)
  
>>> 0.0
>>> 0.1
>>> 0.2
>>> 0.30000000000000004
>>> 0.4
>>> 0.5
>>> 0.6000000000000001
>>> 0.7000000000000001
>>> 0.8
>>> 0.9
>>> 1.0
>>> 1.1
>>> 1.2000000000000002
>>> 1.3
>>> 1.4000000000000001
>>> 1.5
>>> 1.6
>>> 1.7000000000000002
>>> 1.8
>>> 1.9000000000000001
>>> 2.0
>>> 2.1
>>> 2.2
>>> 2.3000000000000003
>>> 2.4000000000000004
>>> 2.5
>>> 2.6
>>> 2.7
>>> 2.8000000000000003
>>> 2.9000000000000004
>>> 3.0
>>> 3.1
>>> 3.2
>>> 3.3000000000000003
>>> 3.4000000000000004
>>> 3.5
>>> 3.6
>>> 3.7
>>> 3.8000000000000003
>>> 3.9000000000000004
>>> 4.0
>>> 4.1000000000000005
>>> 4.2
>>> 4.3
>>> 4.4
>>> 4.5
>>> 4.6000000000000005
>>> 4.7
>>> 4.800000000000001
>>> 4.9
```

