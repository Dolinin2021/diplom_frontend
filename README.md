# Дипломный проект: Облачное хранилище (клиентская часть)

## Описание
Клиентская часть облачного хранилища.

Веб-приложение позволит пользователям отображать, загружать, отправлять, скачивать и переименовывать файлы.

## Функциональность
### Основная страница приложения
* Регистрация и авторизация

### Административный интерфейс системы
#### В эту часть приложения могут войти только пользователи, имеющие значение «администратор» признака «роль» в списке пользователей.
* Список пользователей с выводом признака «роль» и информации, указанной пользователем в форме регистрации (кроме пароля). 
* В списке есть возможность удаления пользователей и изменения значения признака «роль».
* В списке пользователей отображается информация об их файловых хранилищах: ссылки для перехода в профиль пользователя и к интерфейсу управления файловым хранилищем.

### Интерфейс управления файловым хранилищем
#### Вход в интерфейс доступен для любых пользователей. 
#### При этом администратор имеет право управления хранилищами любых пользователей, включая своё собственное.
* Удаление файла
* Переименование файла
* Просмотр файла (в браузере)
* Формирование специальной ссылки на файл для предоставления доступа другим пользователям или использования его в качестве ресурса в веб-приложениях
* Загрузка нового файла в хранилище с указанием комментария.

## Настройка проекта
* Необходимо прописать адрес сервера (API_URL) по пути **_my-app\src\common\system-var.js_** и выполнить пересборку проекта с помощью команды ```npm run rebuild``` и сделать ```git push```:
```
export const API_URL = 'http://79.174.91.160/backend/';
```

## Технологии

* axios
* bootstrap
* prop-types
* react
* react-dom
* react-router-dom
* react-scripts
* react-validation
* validator
* JWT авторизация
* JavaScript
* HTML5
* CSS


## Адрес проекта
[http://79.174.91.160/](http://79.174.91.160/)
