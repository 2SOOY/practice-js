# OOP

## Coding Challenge #1

### 구현 목록

1. `Car` 객체를 만들기
   - make
   - speed : km/h
2. `accelerate` 메소드 구현
   - speed가 10 증가
   - 갱신된 speed값 출력
3. `brake` 메소드 구현
   - speed가 5 감소
   - 갱신된 speed값 출력
4. Test Data

```
car1 : 'BMW' going at 120 km/h
car2 : 'Mercedes' going at 95 km/h
```

## Coding Challenge #2

### 구현 목록

1. ES6 class를 활용하여 Car 객체 만들기
2. `speedUS` getter 프로퍼티
   - 현재 speed 값을 반환
   - 단위 mi/h (/1.6)
3. `speedUS` setter 프로퍼티
   - 현재 speed 값 저장
   - km/h 단위로 저장할 것 (\*1.6)
4. Data

```
car1 : 'Ford' going at 120km/h
```

## Coding Challenge #3

### 구현 목록

1. function을 활용하여 ElectricCar 객체 만들기
   - ElectricCar는 Car객체의 child 객체
   - `charge` 프로퍼티 : %
2. `chargeBettery` 메소드
   - chargeTo를 인자로 받아 charge의 값을 갱신함
3. `accelerate` 메소드
   - speed 20 증가
   - charge 1% 감소
   - 메시지 출력
4. Data

```
car1 : 'Tesla' going at 120 km/h, with a charge of 23%
```
