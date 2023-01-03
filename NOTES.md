## Notes

## Setup with Create React App
https://create-react-app.dev/

```
npx create-react-app my-app
cd my-app
```

## Setup Styled Components  

```
npm install styled-components
```
to have semantically-meaningful class names in development
```
npm install --save-dev babel-plugin-styled-components
```
change import styled to babel macros import
```
// From this:
import styled from 'styled-components';

// ...to this:
import styled from 'styled-components/macro'
```