---
layout: pose
title: Python编程从入门到实践
date: 2021-03-26 16:24:04
tags: [Python, 编程语言入门]
categories: Python
---
前言，该博客记录了我从2021.4.3，自颓废10周之久后,打算开始完成毕业设计的过程。想到什么就补充什么吧。首先便是真正开始学习Python之路。

# 2. 变量和简单数据类型

## 2.1 运行 hello_Python.py 时发生的情况

编辑器会使用Python解释器运行.py文件
<!--more-->
### 2.3.1 使用方法修改字符串的大小写

.title() 以首字母大写的方式显示每个单词， .upper()， .lower() 将字符串改为全部大写或全部小写

### 2.3.2 合并字符串

Python使用 “+” 完成拼接字符串

### 2.3.4 删除空白

Python能够找出字符串开头和末尾多余的空白。要确保字符串末尾没有空白，可使用方法 .rstrip()， 可以删除字符串开头的空白，或者剔除字符串两端的空白，分别使用 .lstrip() 和 .strip()

### 2.4.3 使用函数 str()避免类型错误

函数 str() 可以让Python将非字符串值表示为字符串

```python
age = 23
message = "Happy " + str(age) + "rd Birthday!"
print(message)
```

### 2.5.1 编写注释

注释用 # 标识

# 3. 列表简介

## 3.1 列表是什么

列表由一系列按特定顺序排列的元素组成

```python
bicycles = ['trek', 'redline', 'cannondale']
print(bicycles)
```

### 3.1.1 访问列表元素

从列表bicycles中提取第一款自行车

```python
bicycles = ['trek', 'redline', 'cannondale']
print(bicycles[0])
```

## 3.2 修改、添加和删除元素

### 3.2.1 修改列表元素

假设一个摩托车列表，修改其中第一个元素 ‘honda’

```python
motorcycles = ['honda', 'yamaha', 'suzuki']
print(motorcycles)

motorcycles[0] = 'ducati'
print(motorcycles)
```

### 3.2.2 在列表中添加元素

1.列表末尾添加元素
方法 .append()让动态地创建列表更加简单

```python
motorcycles = ['honda', 'yamaha', 'suzuki']
print(motorcycles)

motorcycles.append('ducati')
print(motorcycles)
```

2.在列表中插入元素
使用方法 .insert()可以在列表的任意位置添加新元素，但是为此需要新元素的索引和值

```python
motorcycles = ['honda', 'yamaha', 'suzuki']

motorcycles.insert(0, 'ducati')
print(motorcycles)
```

结果是，值 'ducati' 被插入到了列表开头，这种操作将列表中的既有的每个元素都右移一个位置

### 3.2.3 从列表中删除元素

1.使用 del 语句删除元素
del 可以删除任何位置处的列表元素，条件是知道其索引

```python
motorcycles = ['honda', 'yamaha', 'suzuki']

del motorcycles[0]
print(motorcycles)
```

2.使用方法 pop() 删除元素
方法pop()可删除列表末尾的元素，并能够接着使用它（类似栈中弹出栈顶元素）

```python
motorcycles = ['honda', 'yamaha', 'suzuki']
print(motorcycles)

popped_motorcycle = motorcycles.pop()
print(motorcycles)
print(popped_motorcycle)
```

3.弹出列表中任何位置处的元素
实际上， pop()可以来删除列表中的任何位置的元素，只需在括号中指定要删除的元素的索引即可

```python
motorcycles = ['honda', 'yamaha', 'suzuki']

first_owned = motorcycles.pop(0)
print(motorcycles)
```

结果是，我们弹出了列表中的第一款摩托车，当使用 pop() 时，被弹出的元素就不在列表中了

4.根据值删除元素
只知道要删除的元素的值时，可以使用方法 remove()

```python
motorcycles = ['honda', 'yamaha', 'suzuki', 'ducati']

motorcycles.remove('ducati')
print(motorcycles)
```

使用 remove() 从列表中删除元素的值时，也可以接着使用它的值

```python
motorcycles = ['honda', 'yamaha', 'suzuki', 'ducati']

too_expensive = 'ducati'
motorcycles.remove(too_expensive)
print(motorcycles)
print("\nA " + too_expensive.title() + " is too expensive for me.")
```

## 3.3 组织列表

### 3.3.1 使用方法 sort() 对列表进行永久性排序

Python方法 sort() 能够较为轻松的对列表进行排序。假设一个汽车列表，令其所有值都是小写的，按照字母顺序排列

```python
cars = ['bmw', 'audi', 'toyota', 'subaru']
cars.sort()
print(cars)
```

结果是，方法 sort() 永久性地修改了列表元素的排列顺序。同时，也可以按与字母顺序相反的顺序排列列表元素，为此，只需向 sort() 方法中传递参数 reverse=True 即可

### 3.3.2 使用函数 sorted() 列表进行临时排序

```python
cars = ['bmw', 'audi', 'toyota', 'subaru']

print(cars)
print(sorted(cars))
print(cars)
```

### 3.3.3 倒着打印列表

要反转列表元素的排列顺序，可使用方法 reverse()

```python
cars = ['bmw', 'audi', 'toyota', 'subaru']
print(cars)

cars.reverse()
print(cars)
```

注意， reverse() 不是指按与字母顺序相反的顺序排列列表元素，而是反转列表的排列顺序

### 3.3.4 确定列表的长度

使用函数 len() 可以快速获悉列表的长度

```python
cars = ['bmw', 'audi', 'toyota', 'subaru']
len(cars)
```

# 4. 操作列表

## 4.1 遍历整个列表

使用for循环

```python
magicians = ['alice', 'david', 'carolina']
for magician in magicians:
    print(magician)
```

## 4.3 创建数字列表

函数range()可以生成一系列数字

```python
for value in range(1,5)
    print(value)
```

结果是，打印出了数字1-4

### 4.3.2 使用range()创建数字列表

1.创建数字列表，可以使用函数list()将range()的结果直接转换为列表。如果将range()作为list()的参数，输出将为一个数字列表

```python
numbers = list(range(1,6))
print(numbers)
```

结果是，

```python
[1, 2, 3, 4, 5]
```

2.使用函数range()还可以指定步长。如下打印1-10间的偶数

```python
even_number = list(range(2,11,2))
print(even_number)
```

### 4.3.4 列表解析

列表解析将for循环和创建新元素的代码合并成一行，并自动附加新元素。如下，创建平方数列表

```python
squares = [value**2 for value in range(1,11)]

# 或者
squares = []
for value in range(1,11)
    square = value**2
    squares.append(square)
print(squares)
```

要使用列表解析，首先制定一个*描述性*的*列表名*，如squares；然后，制定一个左方括号，并定义一个表达式，用于生成要存储到列表中的值。在该实例中，表达式为value **2。接下来，编写一个for循环，用于给表达式提供值，再加上右方括号。在该实例中，for循环为for value in range(1,11)，它将值1-10提供给表达式value **2。

## 4.4 使用列表的一部分

### 4.4.1 切片

要创建切片，可指定要使用的第一个元素的索引和最后一个元素的索引加1.如下，创建切片

```python
players = ['charles', 'martina', 'michael', 'florence', 'eli']
print(players[0:3]) #  打印包含前三位运动员
print(players[:4]) #  从表头开始至表尾
print(players[2:]) #  从第三个元素到表尾
print(players[-3:]) #  输出名单最后三位

```

### 4.4.2 遍历切片

若要遍历列表的部分元素，可以在for循环中使用切片

```python
players = ['charles', 'martina', 'michael', 'florence', 'eli']

for player in players[:3]:
    print(players.title())

```

### 4.4.3 复制列表

要复制列表，可*创建一个包含整个列表的切片*。简单地将变量赋给变量是没有用的。

```python
my_foods = ['pizza', 'falafel', 'carrot cake']
friend_foods = my_foods[:] #  可行
#  friedn_foods = my_foods 赋值无用

my_foods.append('canoli')
friend_foods.append('ice cream')
```

## 4.5 元组

列表用于存储在程序运行期间可能变化的数据集，即可修改的。Python称不能修改的值为不可变的，而不可变的列表成为元组。

### 4.5.1 定义元组

使用圆括号，类似列表。如下，

```python
dimensions = (200, 50)
print(dimension[0])
print(dimension[1])
```

### 4.5.2 遍历元组中的所有值

与列表一样，使用for循环遍历元组

### 4.5.3 修改元组变量

尽管不能修改元组的元素，但是可以给存储元组的变量*赋值*，如下

```python
dimensions = (200, 50)
print(dimensions)
dimensions = (400, 100)
print(dimensions)
```

# 5. if语句

## 5.2 条件测试

### 5.2.5 检查多个条件

1.使用and检查多个条件

2.使用or检查多个条件

### 5.2.6 检查特定值是否包含在列表中

判断特定的值是否已包含在列表中，可使用关键字in，如下

```bash
>>> requested_toppings = ['mushroom', 'onions', 'pineapple']
>>> 'mushroom' in requested_toppings
True
```

## 5.3 if 语句

### 5.3.1 简单的 if 语句

```python
if conditional_test:
    do something
```

### 5.3.2 if-else 语句

```python
if conditional_test:
    do something
else:
    do something
```

### 5.3.3 if-elif-else 结构

```python
if conditional_test:
    do something
elif:
    do something
else: 
    do something
```

### 5.4.2 确认列表不是空的

在运行for循环前确定列表是否为空很重要

```python
requested_toppings = []

if requested_topping:
    for requested_topping in requested_toppings:
        print("Adding " + requested_topping + ".")
    print("\nFinished making your pizza!")
else:
    print("Are you sure you want a plain pizza?")
```

# 6. 字典

## 6.1 一个简单的字典

alien.py

```python
alien_0 = {'color': 'green', 'points': 5}

print(alien_0['color'])
print(alien_0['points'])
```

## 6.2 使用字典

在python中，字典是一系列*键-值*对，每个键都与一个值关联，可以使用键来访问与之相关联的值。事实上，可以将**任何Python对象作为字典中的值**。

```python
alien_0 = ['color': 'green']
```

### 6.2.1 访问字典中的值

要获取与键相关联的值，可依次指定字典名和放在方括号内的键

```python
alien_0 = ['color': 'green']
print(alien_0['color'])
```

### 6.2.2 添加键值对

字典是一种动态结构，要添加键值对，可依次指定字典名、用方括号起的的键和相关联的值

```python
alien_0 = {'color': 'green', 'points': 5}
print(alien_0)

alien_0['x_positon'] = 0
alien_0['y_postion'] = 25
print(alien_0)
```

### 6.2.3 先创建一个空字典

有时，在空字典中添加键-值对是为了方便，有时则必须如此。

```python
alien_0 = {}

alien_0['color'] = 'green'
alien_0['points'] = 5

print(alien_0)
```

### 6.2.4 修改字典中的值

要修改字典中的值，可依次指定字典名、用方括号括起的键以及与该键相关联的新值

```python
alien_0 = {'color': 'green'}

alien_0['color'] = 'yellow'
print(alien_0)
```

### 6.2.5 删除键值对

使用 del 依据将相应的键值对彻底删除。使用 del 语句时，必须要指定字典名和要删除的键

```python
alien_0 = {'color': 'green', 'points': 5}
print(alien_0)

del alien_0['points']
print(alien_0)
```

### 6.2.6 由类似对象组成的字典

使用字典来存储众多对象的同一信息，如下

```python
favorite_languages = {
    'jen': 'python',
    'sarah': 'c',
    'edward': 'ruby',
    'phil': 'python',
}
```

## 6.3 遍历字典

### 6.3.1 遍历所有的键值对

如下字典存储了一名用户的用户名、姓和名

```python
user_0 = {
    'username': 'efermi',
    'first': 'enrico',
    'last': 'fermi',
}

for key, value in user_0.items():
    print("\nKey: " + key)
    print("Value: " + value)
```

**注意**：方法 items()，它返回一个键-值对列表

### 6.3.2 遍历字典中的所有键

不需要使用字典中的值时，方法 keys() 很有用。如下

```python
favorite_languages = {
    'jen': 'python',
    'sarah': 'c',
    'edward': 'ruby',
    'phil': 'python',
}

for name in favorite_languages.keys():
    print(name.title())
```

结果是，输出代码提取字典favorite_languages中的所有键，并依次将他们存储到遍历变量name中。同时，遍历字典时，会默认遍历所有的键，因此，上述代码可以替换成 for name in favorite_languages:，输出不变。

### 6.3.3 按顺序遍历字典中的所有值

字典总是明确地记录键值之间的关联关系，但获取字典的元素时，获取顺序是不可预测的。要以特定的顺序返回元素，一种方法便是在 for 循环中对返回的键进行排序，可以使用函数 sorted() 来获得按特定顺序排列的键列表的副本

```python
favorite_languages = {
    'jen': 'python',
    'sarah': 'c',
    'edward': 'ruby',
    'phil': 'python',
}

for name in sorted(favorite_languages.keys()):
    print(name.title())
```

### 6.3.4 遍历字典中的所有值

使用方法 values() 它返回一个值列表，而不包含任何建。但是这种做法提取了字典中的所有值，没有考虑是否重复。为剔除重复项，可使用集合 set，集合类似于列表，但每个元素都必须是独一无二的

```python
favorite_languages = {
    'jen': 'python',
    'sarah': 'c',
    'edward': 'ruby',
    'phil': 'python',
}

for language in set(favorite_languages.values()):
    print(name.title())
```

## 6.4 嵌套

### 6.4.1 字典列表

字典 alien_0 包含了一个外星人的各种信息，但是无法管理成群结队的外星人。如下，创建一个包含三个外星人的列表

```python
alien_0 = {'color': 'green', 'points': 5}
alien_1 = {'color': 'yellow', 'points': 10}
alien_2 = {'color': 'red', 'points': 15}

aliens = [alien_0, alien_1, alien_2]

for alien in aliens:
    print(alien)
```

### 6.4.2 在字典中存储列表

将列表存储在字典中。如下，存储了比萨的两方面信息：外皮类型和配料列表。其中的配料列表是一个与键'topping'相关联的值。要访问该列表，我们使用字典名和键'toppings'。这将返回一个配料列表，而不是单个值。

pizza.py

```python
pizza = {
    'crust': 'thick',
    'toppings': ['mushrooms', 'extra cheese'],
}
```

结果，每当需要在**字典中将一个键关联到多个值时，都可以在字典中嵌套一个列表**。

### 6.4.3 在字典中存储字典

可以在字典中嵌套字典。例如，如果有多个网站用户，每个都有独特的用户名，可在字典中将用户名作为键，然后将每位用户的信息存储在一个字典中，并将该字典作为与用户名相关联的值。如下，对于每位用户，我们都存储了其三项信息：名、姓和居住地；为访问这些信息，我们遍历所有的用户名，并访问与每个用户名相关两的信息字典

```python
users = {
    'aeinstein': {
        'first': 'albert',
        'last': 'einstein',
        'location': 'princeton',
    },

    'mcurie': {
        'first': 'marie',
        'last': 'curie',
        'location': 'paris',
    },

}
```

# 7. 用户输入和while循环

## 7.1 函数 input() 的工作原理

函数 input() 让程序暂停运行，等待用户输入一些文本。获取用户输入后，Python将其存储在一个变量中以便使用

```python
message = input("Tell me something, and I will repeat it back to you: ")
print(message)
```

有时，提示可能超过一行，此时可以将提示存储在一个变量中，再将该变量传递给函数 input()

```python
prompt = "If you tell me who you are, we can personlize the messages you see."
prompt += "\nWhat is your first name? "
```

结果显示如下，

```python
If you tell me who you are, we can personalize the messages you see.
What is your first name? Eric

Hello, Eric!
```

### 7.1.2 使用 int() 来获取数值输入

使用函数 input() 时，Python将用户输入解读为字符串

```bash
>>> age = input("How old are you?")
How old are you?
>>> age
'21'
```

函数 int() 将数字的字符串转换为数值表示，如下

```bash
>>> age = input("How old are you?")
How old are you? 21
>>> age = int(age)
>>> age >= 18
True
```

## 7.2 while循环简介

### 7.2.1 使用while循环

使用while循环输出1~5

```python
current_number = 1
while current_number <=5:
    print(current_number)
    current_number += 1
```

### 7.2.3 使用标志(flag)

在要求很多条件都满足才能继续运行的程序中，可定义一个变量，用于判断整个程序是否处于活动状态，这个变量成为**标志**，可以让程序在标志为 True 时继续运行，并在任何事件导致标志的值为 False 时让程序停止运行

```python
prompt = "If you tell me who you are, we can personlize the messages you see."
prompt += "\nWhat is your first name? "

active = True
while active:
    message = input(prompt)

    if message = 'quit':
        active = False
    else:
        print(message)
```

### 7.2.4 break与continue

break: 立即退出while循环，不再运行 循环中余下的代码，也不管条件测试结果如何

continue: 要返回到循环开头，并根据条件测试结果决定是否继续执行循环

## 7.3 使用while循环来处理列表和字典

for循环是一种遍历列表的有效方式，但在for循环中不应修改列表，否则将导致Python难以跟踪其中的元素。要在遍历列表的同时对其进行修改，可使用while循环。

通过将while循环同列表和字典结合起来使用，,可收集、存储并组织大量输入，供以后查看和显示

### 7.3.1 在列表之间移动元素

使用一个while循环，在验证用户的同时将其从未验证用户列表中提取出来，再将其加入到另一个已验证用户列表中

```python
unconfirmed_users = ['alice', 'brian', 'candace']
confirmed_users = []

while unconfirmed_users:
    current_user = unconfirmed_users.pop()
    confirmed_users.append(current_user)
```

### 7.3.2 删除包含特定值的所有列表元素

第三章中使用了 remove() 来删除列表中的特定值，前提是要删除的值再列表中只出现了一次

要删除所有这类元素，可不断运行一个while循环，直到列表不再包含值'cat'

```python
pets = ['dog', 'cat', 'dog', 'goldfish', 'cat', 'rabbit', 'cat']
print(pets)

while 'cat' in pets:
    pets.remove('cat')

print(pets)
```

### 7.3.3 使用用户输入来填充字典

可使用while循环提示用户输入任意数量的信息

下面创建一个调查程序，其中的循环每执行时都提示输入被调查者的名字和回答

```python
responses = []
# 设置一个标志，指出调查是否继续
polling_active = True

while polling_active:
    # 提示输入被调查者的名字和回答
    name = input("\nWhat is your name?")
    response = input("Which moutain would you like to climb someday? ")
    # 将答卷存储在字典中
    responses[name] = response
    # 看是否还有人要参与调查
    repeat = input("Would you like to let another person respond? (yes/no) ")
    if repeat == 'no':
        polling_active = False

# 调查结束，显示结果
print("\n--- Poll Results ---")
for name, response in responses.items():
    print(name + " would like to climb " + response + ".")
```

# 8. 函数

## 8.1 定义函数

关键字def、函数名、括号、定义以结尾冒号结束

"""xxx""" 为文档字符串(docstring)

```python
def greet_user():
    """显示简单的问候语"""
    print("Hello")

greet_user()
```

### 8.1.1 向函数传递信息

在函数定义def greet_user()的括号内添加username，通过在这里添加username，可以让函数接受给username指定的任意值

```python
def greet_user(username):
    print("Hello, " + username.title() + "!")

greet_user('jesse')
```

结果，

```python
Hello, Jesse!
```

### 8.1.2 实参与虚参

在上面greet_user()的定义中，变量username是一个形参————**函数完成其工作所需的一项信息**

在代码greet_user('jesse')中，值'jesse'是一个实参————**调用函数时传递给函数的信息**

我们调用函数时，将要让函数使用的信息放在括号中内。在greet_user('jesse')中，将实参'jesse'传递给了函数greet_user()，这个值被存储在形参username中

## 8.2 传递实参

函数定义中可能有多个形参，故函数调用中也可能包含多个实参。向函数传递实参的方式：

1.位置实参：要求实参的顺序与形参的顺序相同

2.关键字实参：其中每个实参都由变量名和值组成

3.还可以使用列表和字典

### 8.2.1 位置实参

在调用函数过程中，Python必须将函数调用中的每个实参都关联到函数定义中的一个形参。为此，最简单的关联方式是基于实参的顺序————位置实参

```python
def describe_pet(animal_type, pet_name):
    """显示宠物的信息"""
    print("\nI have a " + animal_type + ".")
    print("My " + animal_type + "'s name is " + pet_name.title() + ".")

describe_pet('hamster', 'harry')
```

函数的定义表明，需要一种动物类型和一个名字。调用describe_pet()时，，需要按顺序提供一种动物类型和一个名字。如上述，实参'hamster'存储在形参animal_type中，而实参'harry'存储在形参pet_name中。

结果，输出描述了一只名为Harry的仓鼠

1.调用函数多次

```python
def describe_pet(animal_type, pet_name):
    """显示宠物的信息"""
    print("\nI have a " + animal_type + ".")
    print("My " + animal_type + "'s name is " + pet_name.title() + ".")

describe_pet('hamster', 'harry')

describe_pet('dog', 'willie')
```

在函数中，可根据需要次数使用任意数量的位置实参，Python将按顺序将函数调用中的实参关联到函数定义中相应的形参

2.位置实参的顺序很重要

### 8.2.2 关键字实参

关键字实参时传递给函数的名称-值对。关键字实参使我们无需考虑函数调用中的实参顺序，还清楚地指出了函数调用中各个值的用途

```python
def describe_pet(animal_type, pet_name):
    """显示宠物的信息"""
    print("\nI have a " + animal_type + ".")
    print("My " + animal_type + "'s name is " + pet_name.title() + ".")

describe_pet(animal_type='hamster', pet_name='harry')
# 等价于
describe_pet(pet_name='harry', animal_type='hamster')
```

关键字实参的顺序无关紧要，弹药准确地指定函数定义中的形参名

### 8.2.3 默认值

在调用函数中给形参提供了实参时，Python将使用指定的实参值；否则，则使用形参的默认值

```python
def describe_pet(pet_name, animal_type='dog'):
    """显示宠物的信息"""
    print("\nI have a " + animal_type + ".")
    print("My " + animal_type + "'s name is " + pet_name.title() + ".")

# describe_pet('hamster', 'harry')

describe_pet('dog', 'willie')
```

注意，在这个函数定义中，修改了形参的排列顺序。由于给animal_type指定了默认值，无需通过实参来指定动物类型，因此在函数调用中只包含一个实参————宠物的名字。但是，Python仍将这个实参视为位置实参，因此如果函数调用中只包含宠物的名字，这个实参将关联到函数定义中的第一个形参。这就是将pet_name放在形参列表开头的原因。

1.在调用中只提供小狗的名字

```python
describe_pet('willie')
```

只提供了一个实参————'willie'，这个实参将关联到函数定义中的第一个形参————pet_name。由于没有给animal_type提供实参，因此Python使用其默认值'dog'

2.描述的不是小狗

```python
describe_pet(pet_name='harry', animal_type='hamster')
```

由于显式地给animal_type提供了实参，因此Python将忽略这个形参的默认值

### 8.2.4 等效的函数调用

可以混合使用位置实参、关键字实参和默认值

```python
def describe_pet(pet_name, animal_type='dog'):

# 一条名为Willie的小狗
describe_pet('willie')
describe_pet(pet_name='willie')

# 一只名为Harry的仓鼠
describe_pet('harry','hamster')
describe_pet(pet_name='harry', animal_type='hamster')
describe_pet(animal_type='hamster', pet_name='harry')
```

这些函数调用都可以

## 8.3 返回值

在函数中，可使用return语句将值返回到调用函数的代码行。

### 8.3.1 返回简单值

函数接受名和姓并返回整洁的姓名:

```python
def get_formatted_name(first_name, last_name):
    """返回整洁的姓名"""
    full_name = first_name + last_name
    return full_name.title()

musician = get_formatted_name('jimi', 'hendrix')
print(musician)
```

结果，

```python
Jimi Hendrix
```

### 8.3.2 让实参变成可选的

可通过使用默认值来让实参变成可选的

扩展get_formatted_name，使其还处理中间名

```python
def get_formatted_name(first_name, middle_name, last_name):

    full_name = first_name + ' ' + middle_name + ' ' + last_name
    return full_name.title()

musician = get_formatted_name('john', 'lee', 'hooker')
print(musician)
```

为了让中间名变成可选的，可给形参middle_name指定一个默认值————空字符串，并在用户没有提供中间名时不是用这个形参。为让get_formatted_name()在没有提供中间名时依然可行，可给形参middle_name指定一个默认值————空字符串，并将其移到**形参列表的末尾**

```python
def get_formatted_name(first_name, last_name, middle_name=''):

    if middle_name:
        
        full_name = first_name + ' ' + middle_name + ' ' + last_name
    
    else:
        full_name = first_name + ' ' + last_name
    # return full_name.title()

musician = get_formatted_name('jimi', 'hendrix')
musician = get_formatted_name('john', 'hooker', 'lee')
print(musician)
```

结果，对于指定名和姓，直接调用；如果还包括中间名，就必须确保它是最后一个实参

```Python
Jimi Hendrix
John Lee Hooker
```

### 8.3.3 返回字典

下面函数接受姓名的组成部分，并返回一个表示人的字典

```python
def build_person(first_name, last_name):
    """返回一个字典，其中包含有关一个人的信息"""
    person = {'first': first_name, 'last': last_name}
    return person

musician = build_person('jimi', 'hendrix')
print(musician)
```

存储first_name值时，使用的键为'first'，存储last_name值时，使用的键为'last'。最后返回表示人的整个字典，并打印这个返回的值

```python
{'first': 'jimi', 'last': 'hendrix'}
```

进行额外的信息补充

```python
def build_person(first_name, last_name, age=''):
    """返回一个字典，其中包含有关一个人的信息"""
    # person = {'first': first_name, 'last': last_name}
    if age:
        person['age'] = age
    # return person

musician = build_person('jimi', 'hendrix', age=27)
print(musician)
```

### 8.3.4 结合使用函数和while循环

下面尝试使用名和姓跟用户打招呼:

```python
def get_formatted_name(first_name, last_name):

    full_name = first_name + ' ' + last_name
    return full_name.title()

while True:
    
    print("\nPlease tell me your name:")
    print("(enter 'q' at any time to quit)")

    f_name = input("First name: ")
    if f_name == 'q':
        break
    
    l_name = input("Last name: ")
    if l_name == 'q':
        break
    
    formatted_name = get_formatted_name(f_name, l_name)
    print("\nHello, " + formatted_name + "!")
```

结果，

```markdown
Please tell me your name:
(enter 'q' at any time to quit)
First name: **eric**
Last name: **matthes**

Hello, Eric Matthes!

Please tell me your name:
(enter 'q' at any time to quit)
First name: **q**
```

## 8.4 传递列表

像函数传递列表，这种列表包含的可能是名字、数字或更复杂的对象（如字典）。将列表传递给函数后，函数就能直接访问其内容

假设一个用户列表，我们问候其中的每位用户

```python
def greet_users(names):
    """向列表中的每位用户都发出简单的问候"""
    for name in names:
        msg = "Hello, " + name.title() + "!"
        print(msg)

usernames = ['hannah', 'ty', 'margot']
greet_users(usernames)
```

结果，

```python
Hello, Hannah!
Hello, Ty!
Hello, Margot!
```

### 8.4.1 在函数中修改列表

将列表传递给函数后，函数就可对其进行修改。在函数中对列表所做的任何修改都是永久性的。

第一个函数负责处理打印设计的工作，第二个将概述打印了哪些设计

printing_models.py

```python
def print_models(unprinted_designs, completed_models):
    """
    模拟打印每个设计，直到没有未打印的设计为止
    打印每个设计后，都将其移到列表completed_models中
    """
    while unprinted_designs:
        current_design = unprrinted_designs.pop()
        # 模拟根据设计制作3D打印模型的过程
        print("Printing model: " + current_design)
        completed_models.append(current_design)

def show_completed_models(completed_models):
    """显示打印好的所有模型"""
    print("\nThe following models has been printed:")
    for completed_model in completed_models:
        print(completed_model)

unprinted_designs = ['iphone case', 'robot pendant', 'dodecahedron']
completed_models = []

print_models(unprinted_designs, completed_models)
show_completed_models(completed_models)
```

### 8.4.2 禁止函数修改列表

为了解决问题，可以向函数传递列表的副本而不是原件；这样函数所做的任何修改都只影响副本，而不影响原件

```python
# 将列表的副本传递给函数
function_name(list_name[:])
```

切片表示法[:]创建列表的副本。在printing_models.py中，如果不想清空未打印的设计列表，可像下面调用print_models():

```python
print_models(unprinted_designs[:], completed_models)
```

虽然向函数传递列表的副本可保留原始列表的内容，但建议将原始列表传递给函数，从而提高效率

## 8.5 传递任意数量的实参

有时，预先不知道函数需要接受多少个实参，Python允许函数从调用语句中收集任意数量的实参

pizza.py

```python
def make_pizza(*toppings):
    """打印顾客点的所有配料"""
    print(toppings)

make_pizza('pepperoni')
make_pizza('mushrooms', 'green peppers', 'extra cheese')
```

形参名*toppings中的星号让Python创建一个名为toppings的空元组，并将收到的所有值都封装到这个元组中。注意，Python将实参封装到一个元组中，即便函数只收到一个值也如此

```python
('pepperoni',)
('mushrooms', 'green pepper', 'extra cheese')
```

下面将print语句替换为一个循环，对配料列表进行遍历，并对顾客点的比萨进行描述：

```python
def make_pizza(*toppings):
    print("\nMaking a pizza with the following toppings:")
    for topping in toppings:
        print("- " + topping)
    
make_pizza('pepperoni')
make_pizza('mushrooms', 'green peppers', 'extra cheese')
```

结果如下，

```python
Making a pizza with the following toppings:
- pepperoni

Making a pizza with the following toppings:
- mushrooms
- green peppers
- extra cheese
```

### 8.5.1 结合使用位置实参和任意数量实参

为了让函数接收不同类型的实参，必须在函数定义中将接纳任意数量实参的形参放在最后。Python先匹配位置实参和关键字实参，再将余下的实参都收集到最后一个形参中

```python
def make_pizza(size, *toppings):
    print("\nMaking a " + str(size) + "-inch pizza with the following toppings:")
    for topping in toppings:
        print("- " + topping)
    
make_pizza(16, 'pepperoni')
make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')
```

### 8.5.2 使用任意数量的关键字实参

有时，需要接受任意数量的实参，但预先不知道传递给函数的会是什么样的信息，将函数编写成能够接受任意数量的键-值对————调用语句提供多少就接受多少

下面函数build_profile()接受名和姓，同时还接受任意数量的关键字实参

user_profile.py

```python
def build_profile(first, last, **user_info):
    """创建一个字典，其中包含我们知道的有关用户的一切"""
    profile = {}
    profile['first_name'] = first
    profile['last_name'] = last
    for key, value in user_info.items():
        profile[key] = value
    return profile

user_info = build_profile('albert', 'einstein', location='princeton', field='physics')
print(uer_info)
```

形参**user_info中的两个星号让Python创建一个名为user_info的空字典，并将收到的所有名称-值对都封装到这个字典中，在这个函数中，可以像访问其他字典那样访问user_info中的名称-值对

结果，

```python
{'first_name': 'albert', 'last_name': 'einstein', 'location': 'princeton', 'field'='physics'}
```

## 8.6 将函数存储在模块中

将函数存储在被称为*模块*的独立文件中，再将模块*导入*到主程序中。import语句允许在当前运行的程序文件中使用模块中的代码

### 8.6.1 导入整个模块

*模块*是扩展名为.py的文件

下面创建一个包含函数make_pizza()的模块。为此，将文件pizza.py中除函数make_pizza()之外的其他代码删除

pizza.py

```python
def make_pizza(size, *toppings):
    print("\nMaking a " + str(size) + 
    "-inch pizza with the following toppings:")
    for topping in toppings:
        print("- " + topping)
```

接下来，在pizza.py所在的目录中创建另一个名为making_pizza.py的文件，这个文件导入刚才创建的模块，再调用make_pizza()两次

```python
import pizza

pizza.make_pizza(16, 'pepperoni')
pizza.make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')
```

使用import语句并在其中指定模块名，便可以在程序中使用该模块中的所有函数，如果使用import语句导入了名为module_name.py的整个模块，便可以如下使用

```python
module_name.function_name()
```

### 8.6.2 导入特定的模块

导入模块中特定的函数，导入方法如下

```python
from module_name import function_name

通过逗号分隔函数名

from module_name import function_0, function_1, function_2

对于前面的making_pizza.py示例，如果只是想导入要使用的函数

from pizza import make_pizza

make_pizza(16, 'pepperoni')
```

### 8.6.3 使用as给函数指定别名

给函数指定外号

```python
from pizza import make_pizza as mp

mp(16, 'pepperoni')
```

### 8.6.4 使用as给模块指定别名

给模块指定简短的别名(如给模块pizza指定别名p)，更为简单地调用，如pizza.make_pizza(),p.make_pizza()后者更为简洁

```python
import pizza as p

p.make_pizza(16, 'pepperoni')

import module_name as mn

```

### 8.6.5 导入模块中的所有函数

使用星号（*）运算符可让python导入模块中的所有函数

```python
from pizza import *

make_pizza(16, 'pepperoni')
```

# 9. 类

## 9.1 创建和使用类

### 9.1.1 创建dog类

根据Dog类创建的每个实例都将存储名字和年龄，并赋予每条小狗坐下和打滚的能力

dog.py

```python
class Dog():
    """一次模拟小狗的简单尝试"""
    def _init_(self, name, age):
        """初始化属性namne和age"""
        self.name = name
        self.age = age

    def sit(self):
        """模拟小狗被命令时蹲下"""
        print(self.name.title() + "is now sitting.")

    def roll_over(self):
        """模拟小狗被命令时打滚"""
        print(self.name.title() + "rolled over!")

```

在Python中，首字母大学的名称指**类**

1.方法_init_()

类中的函数称为方法；_init_()是一个特殊的方法，每当根据Dog类创建新实例时，都会自动被调用。方法_init()_定义包含了三个形参:self、name和age。形参self必不可少且位于最前面。因为python调用这个_init_()方法来创建Dog实例时，将自动传入实参self。每个与类相关联的方法调用都会自动传递实参self，它是一个指向实例本身的引用，**让实例能够访问类中的属性和方法**。

在我们创建Dog实例时，Python将调用Dog类的方法_init()_。我们将通过实参向Dog()传递名字和年龄;self会自动传递，因此我们不需要传递它。每当我们根据Dog类创建实例时，都只需给最后两个形参(name和age)提供值。

以self为前缀的变量都可供类中的所有方法使用，我们还可以通过类的任意实例来访问这些变量。self.name = name 获取存储在形参name中的值，并将其存储在变量name中，然后**该变量被关联到当前创建的实例**。

### 9.1.2 根据类创建实例

类可以看作有关如何创建实例的说明。下面创建一个表示特定小狗的实例：

```python
class Dog():
    --snip--

my_dog = Dog('willie', 6)

print("My dog's name is " + my_dog.name.title() + ".")
print("My dog is " + str(my_dog.age) + "years old.")
```

上述代码的过程，Python使用实参'williw'和6调用Dog类中的方法_init_()。方法_init_()  创建一个表示特定小狗的实例，并使用我们提供的值来设置属性name和age。方法_init_()并未显式地包含return语句，但Python自动返回一个表示这条小狗的实例。我们将这个实例存储在变量my_dog中。

通常可以认为首字母大写的名称为类，小写的名称为类创建的实例。

1.访问属性

要访问实例的属性，可以使用句点表示法。如 my_dog.name 这演示了Python如何获悉属性的值。这个过程是，Python先找到实例my_dog，再查找与这个实例相关联的属性name。在Dog类中引用这个属性时，使用的是self.name。

2.调用方法

根据Dog类创建实例后，可以使用句点表示法来调用Dog类中的定义的任何方法。

```python
class Dog():
    --snip--
    
    my_dog = ('willie', 6)
    my_dog.sit()
    my_dog.roll_over()
```

调用方法时，指定实例的名称和要调用的方法，并用句号分隔。遇到my_dog.sit()时，Python在类Dog中查找方法sit()并运行其代码。

3.创建多个实例

根据类创建任意数量的实例

```python
class Dog():
    --snip--

    my_dog = Dog('willie', 6)
    your_dog = Dog('lucy', 3)

my_dog.sit()
your_dog.sit()

```

## 9.2 使用类和实例

修改实例的属性，可以直接修改实例的属性，也可以编写方法以特定的方式进行修改

### 9.2.1 Car类

car.py

```python
class Car():
    """一次模拟汽车的简单尝试"""

    def _init_(self, make, model, year):
        """初始化描述汽车的属性"""
        self.make = make
        self.model = model
        self.year = year

    def get_descriptive_name(self):
        """返回整洁的描述性信息"""
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model
        return long_name.title()

my_new_car = Car('audi', 'a4', 2016)
print(my_new_car.get_descriptive_name())
```

方法_init_()接受这些形参的值，并将它们存储在根据这个类创建的实例中的属性中。创建新的Car实例时，我们需要指定其制造商、型号和生产年份

### 9.2.2 给属性指定默认值

类中的每个属性都必须有初始值，即使是0或空字符串。有时设置默认值时，在方法_init_()内指定这种初始值是可行的；如果对某个属性这样做了，就无需包含为它提供初始值的形参。

下面创建添加一个名为odometer_reading的属性，其初始值总是为0。同时添加一个名为read_odometer()的方法，用于读取汽车的里程表

```python
class Car():
    """一次模拟汽车的简单尝试"""

    def _init_(self, make, model, year):
        """初始化描述汽车的属性"""
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0

    def get_descriptive_name(self):
        --snip--

    def read_odometer(self):
        """打印一条指出汽车里程的信息"""
        print("This car has " + str(self.odometer_reading) + " miles on it.")

my_new_car.read_odometer()
```

当Python调用方法_init_()来创建新实例时，将以属性的方式存储制造商、型号和生产年份。之后，Python将创建一个名为odometer_reading的属性，并将其初始值设置为0

### 9.2.3 修改属性的值

三种方法修改属性的值：直接通过实例进行修改；通过方法进行设置；通过方法进行递增(增加特定的值)

1.直接修改属性的值

修改属性的值，通过实例直接访问它。

```python
class Car():
    --snip--

my_new_car = Car('audi', 'a4', 2016)

my_new_car.odometer_reading = 23
my_new_car.read_odometer()
```

2.通过方法修改属性的值

通过方法无需直接访问属性，而可将值传递给一个方法，由它在内部更新

```python
class Car():
    --snip--

    def update_odometer(self, mileage):
        """将里程表读书设置为指定的值"""
        self.odometer_reading = mileage

my_new_car = Car('audi', 'a4', 2016)
print(my_new_car.get_descriptive_name())

my_new_car.update_odometer(23)
my_new_car.read_odometer()
```

方法update_odometer()接受一个里程值，并将其存储在self.odometer_reading中。上述代码中，我们调用了update_odometer()，并向他提供了实参23（该实参对应于方法定义中的形参mileage)。

下面对方法update_odometer()进行扩展，禁止任何人将里程表读数往回调:

```python
class Car():
    --snip--

    def update_odometer(self, mileage):
        """
        将里程表读数设置为指定的值
        禁止将里程碑表读数往回调
        """
        if mileage >= self.odometer_reading:
            self.odometer_reading = mileage
        else:
            print("You can't roll back an odometer!")
```

3.通过方法对属性的值进行递增

有时需要将属性值递增指定的量

```python
class Car():
    --snip--
    def update_odometer(self, mileage):
        --snip--

    def increment_odometer(self, miles):
        """将里程表读数增加指定的量"""
        self.odometer_reading += miles

my_used_car = Car('subaru', 'outback', 2013)
print(my_used_car.get_descriptive_name())

my_used_car.update_odometer(23500)
my_used_car.read_odometer()

my_used_car.increment_odometer(100)
my_used_car.read_odometer()
```

## 9.3 继承

### 9.3.1 子类的方法_init_()

一个类继承另一个类时，它将自动获得另一个类的所有属性和方法

electric_car.py

```python
class Car():
    --snip--
    def update_odometer(self, mileage):
        --snip--

    def increment_odometer(self, miles):
        """将里程表读数增加指定的量"""
        self.odometer_reading += miles

my_used_car = Car('subaru', 'outback', 2013)
print(my_used_car.get_descriptive_name())

my_used_car.update_odometer(23500)
my_used_car.read_odometer()

my_used_car.increment_odometer(100)
my_used_car.read_odometer()

class ElectricCar(Car):
    """电动汽车的独特之处"""
    def _init_(self, make, model, year):
        """初始化父类的属性"""
        super()._init_(make, model, year)

my_tesla = ElectricCar('tesla', 'model s', 2016)
print(my_tesla.get_descriptive_name())
```

创建子类时，父类必须包含在当前文件中，且位于子类前面。定义子类时，必须在括号内指定父类的名称。方法_init_()接受创建Car实例所需的信息。

super()函数是帮助Python将父类和子类关联起来。该语句让Python调用ElectricCar的父类的方法_init()_，让ElectricCar实例包含父类的所有属性。父类也称超类(superclass)

### 9.3.3 给子类定义属性和方法

一个类继承另一个类后，可添加区分子类和父类所需的新属性和方法

```python
class Car():
    --snip--

class ElectricCar():
    """电动汽车的独特之处"""
    def _init_(self, make, model, year):
        """
        电动汽车的独特之处
        初始化父类的属性，再初始化电动汽车特有的属性
        """
        super()._init_(make, model, year)
        self.battery_size = 70

    def describe_battery(self):
        """打印一条描述电瓶容量的消息"""
        print("This car has a " + str(self.battery_size) + "-kwh battery.")

my_tesla = ElectricCar('tesla', 'model s', 2016)
print(my_tesla.get_descriptive_name())
my_tesla.describe_battery()
```

上述代码添加了新属性self.battery_size，并设置其初始值，根据ElectricCar类创建的所有实例都将包含这个属性，但所有Car实例都不包含它。

### 9.3.4 重写父类的方法

可在子类中定义一个这样的方法，即它与要重写的父类方法同名。这样，Python将不会考虑这个父类方法，而只关注在子类中定义的相应方法。

```python
class ElectricCar(Car):
    --snip--
    def fill_gas_tank(self):
        """电动汽车没有油箱"""
        print("This car doesn't need a gas tank!")
```

结果，如果有人对电动汽车调用方法fill_gas_tank()，Python将忽略Car类中的方法fill_gas_tank()，转而运行上述代码。使用继承中，可让子类保留从父类那里继承而来的精华，并提出不剔除不需要的糟粕

### 9.3.5 将实例用作属性

将类的一部分作为一个独立的类提取出来，可将大型类拆分成多个协同工作的小类

在给ElectricCar类添加细节时，可将这些属性和方法提取出来，放到另一个名为Battery的类中，并将一个Battery实例用作ElectricCar类的一个属性

```python
class Car():
    --snip--

class Battery():
    """一次模拟电动汽车电瓶的简单尝试"""
    def _init_(self, battery_size=70):
        """初始化电瓶的属性"""
        self.battery_size = battery_size

    def description_battery(self):
        """打印一条描述电瓶容量的消息"""
        print("This car has a " + str(self.battery_size) + "-kwh battery.")

class ElectricCar(Car):
    """电动汽车的独特之处"""
    def _init_(self, make, model, year):
        """
        初始化父类的属性，再初始化电动汽车特有的属性
        """
        super()._init_(make, model, year)
        self.battery = Battery()

my_tesla = ElectricCar('tesla', 'model s', 2016)
my_tesla.batter.describe_battery()
```

上述代码首先定义了一个名为Battery的新类，它没有继承类。其中的_init_()除self外，还有另一个形参battery_size。这个形参是可选的，如果没有给它提供值，电瓶容量将被设置为70。方法describe_battery()也移到了这个类中。

在ElectricCar类中，添加了一个名为self.battery的属性。这行代码让Python创建一个新的Battery实例(由于没有指定尺寸，因此为默认值70)，并将该实例存储在属性self.battery中。每当方法_init_()被调用时，都将执行该操作；因此仙子啊每个ElectricCar实例都包含一个自动创建的Battery实例。

我们创建一辆电动汽车，并将存储在变量my_tesla中。要描述电瓶时，需要使用电动汽车的属性battery:

my_tesla.battery.describe_battery()

这行代码让Python在实例my_tesla中查找属性battery，并对存储在该属性中的Battery实例调用方法describe_battery()

下面给Battery类添加一个方法，它根据电瓶容量报告汽车的续航里程

```python
class Car():
    --snip--

class Battery():
    --snip--
    def get_range(self):
        """打印一条消息，指出电瓶的续航里程"""
        if self.battery_size == 70:
            range = 240
        elif self.battery_size == 85:
            range = 270
        message = "This car can go approximately " + str(range)
        message += "miles on a full charge."
        print(message)

class ElectricCar(Car):
    --snip--

my_tesla = ElectricCar('tesla', 'model s', 2016)
print(my_tesla.get_descriptive_name())
my_tesla.battery..describe_battery()
my_tesla.battery.get_range()
```

## 9.4 导入类

Python允许将类存储在模块中，然后在主程序中导入所需的模块

### 9.4.1 导入单个类

下面创建一个只包含Car类的模块，将Car类存储在一个名为car.py的模块中，该模块将覆盖前面使用的文件car.py。从这之后，使用该模块的程序都必须使用更具体的文件名，如my_car.py

car.py

```python
"""一个可用于表示汽车的类"""

class Car():
    """一次模拟汽车的简单尝试"""

    def _init_(self, make, model, year):
        """初始化描述汽车的属性"""
        self.make = make 
        self.model = model
        self.year = year 
        self.odometer_reading = 0

    def get_descriptive_name(self):
        """返回整洁的描述性名称"""
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model
        return long_name.title()

    def read_odometer(self):
        """打印一条消息，指出汽车的里程"""
        print("This car has " + str(self.odometer_reading) + " miles on it.")

    def update_odometer(self, mileage):
        """
        将里程表读数设置为指定的值
        拒绝将里程表往回拨
        """
        if mileage >= self.odometer_reading:
            self.odometer_reading = mileage 
        elif:
            print("You can't roll back an odometer!")
    def increment_odometer(self, miles):
        """将里程表读数增加指定的量"""
        self.odometer_reading += miles
```

代码开头部分 """一个可用于表示汽车的类""" 是一个模块级文档字符串，对该模块的内容做简要描述

下面创建一个文件————my_car.py，在其中导入Car类并创建其实例

my_car.py

```python
from car import Car

my_new_car = Car('audi', 'a4', 2016)
print(my_new_car.get_descriptive_name())

my_new_car.odometer_reading = 23
my_new_car.read_odometer()
```

### 9.4.2 在一个模块中存储多个类

类Battery和ElectricCar类加入模块car.py中

car.py

```python
"""一组用于表示燃油汽车和电动汽车的类"""

class Car():
    --snip--

class Battery():
    """一次模拟电动汽车电瓶的简单尝试"""
    def _init_(self, battery_size=70):
        """初始化电瓶的属性"""
        self.battery_size = battery_size

    def describe_battery(self):
        """打印一条描述电瓶容量的消息"""
        print("This car has a " + str(self.battery_size) + "-kWh battery.")

    def get_range(self):
        """打印一条描述电瓶续航里程的消息"""
        if self.battery_size = 70:
            range = 240
        elif self.battery_size = 85:
            range = 270

        message = "This car can go approximately " + str(range)
        message += " miles on a full charge"
        print(message)

class ElectricCar(Car):
    """模拟电动汽车的独特之处"""
    def __init__(self, make, model, year):
        """初始化父类的属性，再初始化电动汽车特有的属性"""
        super().__init__(make, model, year)
        self.battery = Battery()
```

新建一个my_electric_car.py文件，导入ElectricCar类，并创建一辆电动汽车

my_electric_car.py

```python
from car import ElectricCar

my_tesla = ElectricCar('tesla', 'model s', 2016)

print(my_tesla.get_descriptive_name())
my_tesla.battery.describe_battery()
my_tesla.battery.get_range()
```

### 9.4.3 从一个模块中导入多个类

my_cars.py

```python
from car import Car, ElectricCar

my_beetle = Car('volkswagen', 'beetle', 2016)
print(my_beetle.get_descriptive_name())

my_tesla = ElectricCar('tesla', 'roadster', 2016)
print(my_tesla.get_descriptive_name())
```

### 9.4.4 导入整个模块

导入整个模块，再使用句点表示法访问需要的类。由于创建类实例的代码都包含模块名，因此不会与当前文件使用的任何名称发生冲突。

my_cars.py

```python
import car

my_beetle = car.Car('volkswagen', 'beetle', 2016)
print(my_beetle.get_descriptive_name())

my_tesla = car.ElectricCar('tesla', 'roadster', 2016)
print(my_get_descriptive_name())
```

上述代码使用语法module_name.class_name访问需要的类

### 9.4.5 导入模块中的所有类

from module_name import *

# 10.文件和异常

## 10.1 从文件中读取数据

### 10.1.1 读取整个文件

file_reader.py

```python
with open('pi_digits.txt') as file_object:
    contents = file_object.read()
    print(contents)
```

函数open()接受一个参数：要打开的文件的名称。Python在当前执行的文件所在的目录中查找指定的文件。在上述示例中，当前运行的是file_reader.py，因此Python在file_reader.py所在的目录中查找pi_digits.txt。

函数open()返回一个表示文件的对象。

关键字with在不再需要访问文件后将其关闭。该程序中，我们调用了open()，但是未调用close()，若这样做时，如果程序存在bug，导致close()语句未执行，文件将不会关闭。

方法read()读取这个文件的全部内容，并将其作为一个长长的字符串存储在变量contents中。

```python
3.1415923535
  8979323846
  2643383279

```

结果，多出来一个空行，因为read()到达文件末尾时返回一个空字符串，而将这个空字符串显示出来时就是一个空行。要删除末尾的空行，可在print语句中使用rstrip():

```python
with open('pi_digits.txt') as file_object:
    contents = file_object.read()
    print(contents.rstrip())
```

### 10.1.2 文件路径

例如将程序文件存储在了文件夹python_work中，而在文件夹python_work中，有一个名为text_files的文件夹，用于存储程序文件操作的文本文件。因此，可以使用相对路径来打开该文件夹中的文件。相对文件路径让Python到指定的位置去查找，而该位置是相对于当前运行的程序所在目录的。

在Linux和OS X中，可以如下编写:

```python
with open('text_files/filename.txt') as file_object:
```

上述代码让Python到文件夹python_work下的文件夹text_files中去查找指定的.txt文件。在Windows系统中，在文件路径中使用反斜杠 \ 而不是斜杠 / :

```python
with open('text_files\filename.txt')
```

在相对路径行不通时，可以选择绝对路径。绝对路径通常比相对路径更长，因此将其存储在一个变量中，再将该变量传递给open()会有帮助。在Linux和OS X中，绝对路径如下：

```python
file_path = '/home/ehmatthes/other_files/text_files/filename.txt'
with open(file_path) as file_object:
```

而在Windows系统中，它们类似于下面这样：

```python
file_path = 'C:\Users\ehmatthes\other_files\text_files\filename.txt'
with open(file_path) as file_object:
```

### 10.1.3 逐行读取

要以每次一行的方式检查文件，可对文件对象使用for循环：

```python
filename = 'pi_digits.txt'

with open(filename) as file_object:
    for line in file_object:
        print(line)
```

上述代码调用open()后，将一个表示文件及其内容的休想存储到了变量file_object中。这里也使用了关键字with，让Python负责妥善地打开和关闭文件。

我们打印每一行时，发现空白行更多了：

```python
3.1415923535

  8979323846

  2643383279

```

原因是每行的末尾都有一个看不见的换行符，而print语句也会加上一个换行符，因此每行末尾都有两个换行符：一个来自文件，另一个来自print语句。要消除这些多余的空白行，可在print语句中使用rstrip()

```python
filename = 'pi_digits.txt'

with open(filename) as file_object:
    for line in file_object:
        print(line.rstrip())
```

### 10.1.4 创建一个包含文件各行内容的列表

使用关键字with时，open()返回的文件对象只在with代码块内可用。如果要在with代码块外访问文件的内容，可在with代码块内将文件的各行存储在一个列表中，并在with代码块外使用该列表：你可以立即处理文件的各个部分，也可以推迟到程序后面再处理。

下面示例在with代码块中将文件pi_digits.txt的各行存储在一个列表中，再在with代码块外打印他们：

```python
filename = 'pi_digits.txt'

with open(filename) as file_object:
    lines = file_object.readlines()

for line in lines:
    print(lines.rstrip())
```

方法readlines()从文件中读取每一行，并将其存储在一个列表；然后该列表被存储到变量lines中；在with代码块外，我们仍然可以使用。

### 10.1.5 使用文件的内容

首先，创建一个字符串，它包含文件中存储的所有数字，且没有任何空格：

pi_string.py

```python
filename = 'pi_digits.txt'

with open(filename) as file_object:
    lines = file_object.readlines()

pi_string = ''
for line in lines:
    pi_string += line.rstrip()

print(pi_string)
print(len(pi_string))
```

过程，首先打开文件，将其中的所有行都存储在一个列表中。同时创建了一个变量pi_string，用于存储圆周率的值，之后使用一个循环将各行都加入pi_string，并删除每行末尾的换行符，最后打印这个字符串及其长度：

```python
3.1415926535 8979323846 2643383279
36
```

在变量pi_string存储的字符串中，包含原来位于每行左边的空格，删除空格使用strip()

```python
filename = 'pi_digits.txt'

with open(filename) as file_object:
    lines = file_object.readlines()

pi_string = ''
for line in lines:
    pi_string += line.strip()

print(pi_string)
print(len(pi_string))
```

注意： 读取文本文件时，Python将其中的所有文本都解读为字符串。如果读取的是数字，并要将其作为数值使用，就必须使用函数int()将其转换为整数，或使用函数float()将其转换为浮点数

### 10.1.6 包含一百万位的大型文件

pi_string.py

```python
filename = 'pi_million_digits.txt'

with open(filename) as file_object:
    lines = file_object.readlines()

pi_string = ''
for line in lines:
    pi_string += line.strip()

print(pi_string[:52] + "...")
print(len(pi_string))
```

## 10.2 写入文件

### 10.2.1 写入空文件

在调用open()时提供另一个实参'a'

write_message.py

```python
fielname = 'programming.txt'

with open(filename, 'w') as file_object:
    file_object.write("I love programming.")
```

示例中，调用open()时提供了两个实参。第一个实参是要打开的文件的名名称；第二个实参是('w')，即以写入模式打开文件。

打开文件时，可指定读取模式('r')、写入模式('w')、附加模式('a')或能偶读取和写入文件的模式('r+')。默认以只读模式打开文件。

注意：Python只能将字符串写入文本文件。要将数值存储到文本文件中，必须先使用函数str()将其转换为字符串格式

### 10.2.2 写入多行

函数write()不会在写入的文本末尾添加换行符

```python
filename = 'programming.txt'

with open(filename, 'w') as file_object:
    file_object.write("I love programming.")
    file_object.write("I love creating new games.")
```

打开programming.txt，将发现两行内容挤在一起:

```python
I love programming. I love creating new games.
```

每行字符串单独一行，在write()语句中包含换行符:

```python
filename = 'programming.txt'

with open(filename, 'w') as file_object:
    file_object.write("I love programming.\n")
    file_object.write("I love creating new games.\n")
```

### 10.2.3 附加到文件

给文件添加内容，而不是覆盖原有内容，可以附加模式打开文件。以附加模式打开文件时，Python不会在返回文件对象前清空文件，而写入到文件的行都将添加到文件末尾。如果指定文件不存在，则会自动创建一个空文件

下面修改write_meesage.py

```python
filename = 'programming.txt'

with open(filename, 'a') as file_object:
    file_object.write("I also love finding meaning in large datasets.\n")
    file_object.write("I love creating apps that can run in a browser.\n")
```

## 10.3 异常

Python使用被称为异常的特殊对象来管理程序执行期间发生的错误。每当发生让Python不知所措的错误时，它都会创建一个异常对象。

异常使用try-except代码块处理的。try-except代码块让Python执行指定的操作，同时告诉Python发生异常时该怎么办。

### 10.3.1 处理ZeroDivisionError异常

division.py

```python
print(5/0)
```

### 10.3.2 使用try-except代码块

```python
try:
    print(5/0)
except ZeroDivisionError:
    print("You can't divide by zero")
```

如果try代码块中的代码运行没有问题，则会跳过except代码块；如果try代码块中的代码导致了错误，Python将查找这样的except代码块，并运行其中的代码，即其中指定的错误与引发的错误相同

### 10.3.3 使用异常避免崩溃

下面创建一个只执行出发运算的简单计算器：

division.py

```python
print("Give me two numbers, and I'll divide them.")
print("Enter 'q' to quit.")

while True:
    first_number == input("\nFirst number: ")
    if first_number == 'q':
        break
    second_number == input("Second number: ")
    if second_number == 'q':
        break
    answer = int(first_number) / int(second_number)
    print(answer)
```

### 10.3.4 else代码块

通过将可能引发错误的代码放到try-except代码块中，可提高这个程序抵御错误的能力。下面示例包含一个else代码块；依赖于try代码块成功执行的代码都应放到else代码块中：

```python
print("Give me two numbers, and I'll divide them.")
print("Enter 'q' to quit.")

while True:
    first_number == input("\nFirst number: ")
    if first_number == 'q':
        break
    second_number == input("Second number: ")
    try:
        answer = int(first_number) / int(second_number)
    except ZeroDivisionError:
        print("You can't divide by 0!")
    else:
        print(answer)
```

依赖于try代码块成功执行的代码都放在else代码块中。

try-except-else的工作原理：Python尝试执行try代码块中的代码，只有可能引发异常的代码才需要放在try语句中。有时，有一些仅在try代码块成功执行时才需要运行的代码；这些代码应放在else代码块中。except代码块告诉Python，如果它尝试运行try代码块中的代码时引发了指定的异常，该怎么办。

### 10.3.5 处理FileNotFoundError异常

尝试读取一个不存在的文件。

```python
filename = 'alice.txt'

with open(filename) as f_obj:
    contents = f_obj.read()
```

在上述示例中，错误函数open()导致的，因此需要将try语句放在包含open()的代码行之前:

```python
filename = 'alice.txt'

try:
    with open(filename) as f_obj:
        contents = f_obj.read()
except FileNotFoundError:
    msg = "Sorry, the file " + filename + " dose not exist."
    print(msg)
```

### 10.3.6 分析文本

下面提取童话Alice in Wonderland的文本，并尝试计算它包含多少个单词，使用方法split()，它根据一个字符串创建于一个单词列表。

```bash
>>> title = "Alice in Wonderland"
>>> title.split()
['Alice', 'in', 'Wonderlan']
```

方法split以空格为分隔符将字符串拆分成多个部分，并将这些部分都存储在一个列表中。

```python
filename = 'alice.txt'

try:
    with open(filename) as f_obj:
        contents = f_obj.read()
except FileNotFoundError:
    msg = "Sorry, the file " + filename + " does not exist."
    print(msg)
else:
    # 计算文件大致包含多少个单词
    words = contents.split()
    num_words = len(words)
    print("The file " + filename + " has about " + str(num_words) + " words.")
```

### 10.3.7 使用多个文件

```python
def count_words(filename):
    """计算一个文件大致包含多少个单词"""
    try:
        with open(filename) as f_obj:
            contents = f_obj.read()
    except FileNotFoundError:
        msg = "Sorry, the file " + filename + " does not exist."
        print(msg)
    else:
        # 计算文件大致包含多少个单词
        words = contents.split()
        num_words = len(words)
        print("The file " + filename + " has about " + str(num_words) + " words.")

filename = 'alice.txt'
count_words(filename)
```

```python
def count_words(filename):
    --snip--

filenames = ['alice.txt', 'siddhartha.txt', 'moby_dick.txt', 'little_women.txt']
for filename in filenames:
    count_words(filename)
```

### 10.4.8 失败时一声不吭

Python有一个pass语句，可在代码块中使用来告诉Python什么都不做

```python
def count_words(filename):
    try:
        --snip--
    except FileNotFoundError:
        pass
    else:
        --snip--
```

### 10.4 存储数据

一种简单的方式是使用模块json来存储数据

JSON(JavaScript Object Notation)

### 10.4.1 使用json.dump()和json.load()

下面编写一个存储一组数字的简短程序，再编写一个将这些数字读取到内存中的程序。第一个程序使用json.dump()来存储这组数字，而第二个程序将使用json.load()

函数json.dump()接受两个实参：要存储的数据以及可用于存储数据的文件对象

number_writer.py

```python
import json

numbers = [2, 3, 5, 6, 11, 13]

filename = 'numbers.json'
with open(filename) as f_obj:
    json.dump(numbers, f_obj)
```

先导入模块json，再创建一个数字列表。通常使用文件扩展名.json来指出文件存储的数据为JSON格式。

下面编写一个程序，使用json.load()将这个列表读取到内存中

numbers_reader.py

```python
import json

filename = 'numbers.json'

with open(filename) as f_obj:
    numbers = json.load(f_obj)

print(numbers)
```

上面代码我们读取的是前面写入的文件。我们使用json.load()加载存储在numbers.json中的信息，并将其存储在变量numbers中。

### 10.4.2 保存和读取用户生成的数据

下面示例：用户首次运行程序时被提示出入自己的名字，这样再次运行程序时就记住他了

remember_me.py

```python
import json

username = input("What is your name?")

filename = 'username.json'
with open(filename) as f_obj:
    json.dump(username, f_obj)
    print("We'll remember you when you come back, " + username + "!")
```

再编写一个程序，向其名字被存储的用户发出问候

greet_user.py

```python
import json

filename = 'username.json'

with open(filename) as f_obj:
    username = json.load(f_obj)
    print("Welconme back, " + username + "!")
```

下面将两个程序合并一起(remember_me.py)，程序运行时，我们先尝试从文件username.json中获取用户名，因此首先编写一个尝试恢复用户名的try代码块。如果这个文件不存在，我们就在except代码块中提示用户输入用户名，并将其存储在username.json中，以便程序再次运行时能够获取它

remember_me.py

```python
import json
# 如果以前存储了用户名，就加载它

# 否则，就提示用户输入用户名并存储
filename = 'username.json'
try:
    with open(filename) as f_obj:
        username = json.load(f_obj)
except FileNotFoundError:
    username = input("What is your name?")
    with open(filename, 'w') as f_obj:
        json.dump(username, f_obj)
        print("We'll remember you when you come back, " + username + "!")
else:
    print("Welcome back, " + username + "!")
```

### 10.4.3 重构

重构让代码更清晰，更易于理解，更容易扩展

重构remember_me.py，可将其大部分逻辑放到一个或多个函数中。

remember_me.py

```python
import json

def greet_user():
    """问候用户，并指出其名字"""
    filename = 'username.json'
    try:
    with open(filename) as f_obj:
        username = json.load(f_obj)
except FileNotFoundError:
    username = input("What is your name?")
    with open(filename, 'w') as f_obj:
        json.dump(username, f_obj)
        print("We'll remember you when you come back, " + username + "!")
else:
    print("Welcome back, " + username + "!")

greet_user()
```

下面重构greet_user()

```python
import json

def get_stored_username():
    """如果存储了用户名，就获取它"""
    filename = 'username.json'
    try:
        with open(filename) as f_obj:
            username = json.load(f_obj)
    except FileNotFoundError:
        return None
    else:
        return username

def greet_user():
    """问候用户，并指出其名字"""
    filename = 'username.json'
    try:
    with open(filename) as f_obj:
        username = json.load(f_obj)
except FileNotFoundError:
    username = input("What is your name?")
    with open(filename, 'w') as f_obj:
        json.dump(username, f_obj)
        print("We'll remember you when you come back, " + username + "!")
else:
    print("Welcome back, " + username + "!")

greet_user()
```

最后的代码

```python
import

def get_stored_username():
    """如果存储了用户，就获取它"""
    --snip--

def get_new_username():
    """提示用户输入用户名"""
    username = input("What is your name?")
    filename = 'username.json'
    with open(filename, 'w') as f_obj:
        json.dump(username, f_obj)
    return username

def greet_user():
    """问候用户，并指出其名字"""
    username = get_stored_username()
    if username:
        print("Welcome back, " + username + "!")
    else:
        username = get_new_username()
        print("We'll remember you when you come back, " + username + "!")

greet_user()
```

