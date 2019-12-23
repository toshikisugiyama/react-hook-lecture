
# React

## Create React App

### Create React Appのインストール

```
npm install -g create-react-app
```

### アプリケーションの作成

```
create-react-app アプリケーション名
```

### アプリケーションの起動

```
cd アプリケーション名
yarn start
```

## JSX

```javascript=
import React from 'react';

const App = () => {
  return <div>Hello, world!</div>
}

export default App;
```

```javascript=
import React from 'react';

const App = () => {
  return React.createElement(
    "div",
    null,
    "Hello, world!",
  );
}

export default App;
```
JSXの利点は、直感的で分かりやすいこと

## 余計なタグを付けなくて済む

```jsx=
<React.Fragment></React.Fragment>
```

`React.Fragment`は消してもよい。

```jsx=
<></>
```

## props と defaultProps

```javascript=
import React from 'react';

const App = () => {
  const profiles = [
    {owner: "Tom", name: "Douglas", color: "black", age: "4"},
    {owner: "Ken", name: "Hachi", color: "brown", age: "13"},
    {owner: "Aya", name: "Shiro", color: "white", age: "8"},
    {owner: "Emanon"},
  ];
  return (
    <div>
      {
        profiles.map((profile,index) => {
          return <Dog owner={profile.owner} name={profile.name} color={profile.color} age={profile.age} key={index} />
        });
      }
    </div>
  )
}

const Dog = props => {
  return (
    <table>
      <tr>
        <th>Owner</th>
        <th>Name</th>
        <th>Color</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>{props.owner}</td>
        <td>{props.name}</td>
        <td>{props.color}</td>
        <td>{props.age}</td>
      </tr>
    </table>
  )
}

Dog.defaultProps = {
  owner: "Unknown owner",
  name: "Emanon",
  color: "Unknown",
  age: "Unknown"
}
```

## propTypes

```javascript=
import propTypes from 'prop-types';

Dog.propTypes = {
  owner: propTypes.string.isRequired,
  name: propTypes.string,
  color: propTypes.string,
  age: propTypes.number,
}
```

## useStatus()

## useEffect()

**componentDidMount**や**componentDidUpdate**のタイミングで呼ばれる。

第2引数に空配列を渡すと、**componentDidMount**のタイミングのみで呼ばれる。

第2引数の配列に`name`と入れると、`name`がupdateされたタイミングで第１引数のコールバック関数が呼ばれる。

## 状態遷移表

||作成する|削除する|すべて削除する|
|:-:|:--|:--|:--|
|events|eventsの先頭に  eventを追加したものを  新しいeventsとする|eventsの  中から該当の要素を  削除する|eventsを初期化する|

## useReducer()

reducer用のディレクトリを作り、reducerをまとめる `index.js` を作る。

```
mkdir src/reducers
touch src/reducers/index.js
```

常に`state`と`action`を引数に取る。
`action`には`type`という属性が渡る。


`state`と`dispatch`を返す。
引数に`reducer`と管理するreducerで扱う状態の初期値を渡す。
dispatchを読んだタイミングでstateが変わる。

アクションは変数にして、`src/actions/index.js`にまとめておく。
こうすることで、タイポしたときにエラーになるので解決しやすい。

```
mkdir src/actions
touch src/actions/index.js
```

## Redux

#### パッケージのインストール

```
yarn add redux react-redux
```

#### アクションの作成

アクションは、JavaScriptのオブジェクト。
`type`というキーと、それに対応する値(ユニークである必要あり)を持つ。

```
mkdir src/actions
touch src/actions/index.js
```
`src/actions/index.js`には、アクションを定義してリターンする関数、 **アクションクリエーター**を書き、エクスポートする。

#### リドューサーの実装

アクションが発生したときに、そこに組み込まれているタイプに応じて、状態をどう変化させるのかを定義するもの。

```
mkdir src/reducers
touch src/reducers/index.js
touch src/reducers/任意のファイル名.js
```

`index.js`は、アプリケーション内に存在するすべてのリドューサーを総括する。そのために、`index.js`でリドューサーを結合する関数を読み込んでおく。

```javascript=
import {combineRducers} from 'redux';
```

#### ストア

リドューサーをもとにストアを作成する。
アプリケーション全体でストアを利用できるようにする。

`src/index.js` で必要なものを読み込む。

```javascript=
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers'
import App from './components/App'
```

```
mkdir src/components
```

## combineReducers()
複数のreducerを統合し、ひとつのreducer (root reducer) を作る。

今まで`reducers/index.js`に書いていた`events`関数を、`reducers/events.js`内に書く。

`reducers/index.js`はroot reducer としての役割になる。
reduxから`combineReducers`を読み込み、他のreducerを読み込み、combineReducersをexportする。

`components/App.js`で`useReaducer`の第２引数を、配列からオブジェクトに変える。`initialState`に`{events: []}`を代入し、それを`useReducer`の第２引数にしている。

上の変更に伴い、他のファイル内で使っている`state`を`state.events`に変える。

```javascript=
import { combineReducers } from 'redux'
import events from './events'

export default combineReducers({events})
```



## axios

```
yarn add axios
```

## Redux Thunk

```
yan add redux-thunk
```

## map()

## filter()

## createContext()

`contexts`ディレクトリを作成

```
mkdir -p src/contexts
touch src/countexts/AppContext.js
```

### Provider

### Consumer

## useContext(AppContext)
`Consumer`を使う方法に代わるフック。

## toISOString()

## JSON.stringify()

## JSON.parse()
