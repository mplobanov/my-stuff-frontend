# Приложение для учёта вещей

Складское приложение для учёта одежды в быту. 

Маленький учебный проект.

### Стек
- **React** приложение, создано с **CRA** ([create-react-app](https://create-react-app.dev/))
- **TypeScript**
- **GraphQL** для связи с беком, клиент **Apollo Client**
- **CSS Modules** для стилей, без препроцессоров
- **Storybook** чтобы смотреть комопненты по отдельности
- __React-router__ для роутинга

### Как запустить
```shell
# клонируем репозиторий
git clone https://github.com/mplobanov/my-stuff-frontend.git

# заходим в папку
cd my-stuff-frontend 

# устанавливаем зависимости
npm i 

# запускаем приложение
npm run start

# или можем запустить сторибук
npm run storybook
```

На данный момент endpoint бека: [api.stuff.lbnv.mp](https://api.stuff.lbnv.mp/graphql/) (включен GraphiQL)

Репозиторий бека: [mplobanov/mystuff_backend](https://github.com/mplobanov/mystuff_backend)

Если вы запустили его локально на [http://0.0.0.0:8000/graphql/](http://0.0.0.0:8000/graphql/), то поменяйте endpoint на фронте в [appoloClient.ts](./src/utils/apolloClient.ts)

При локальном запуске нужно установить сертификаты HTTPS.