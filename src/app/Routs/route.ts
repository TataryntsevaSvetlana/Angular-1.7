const routeConfig = ($locationProvider, $stateProvider) => {
    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });

    const ToDoListState = {
      name: 'todolist',
      url: '/todolist',
      template: `
        <aside class="aside">
          <app-nav-bar-component></app-nav-bar-component>
        </aside>
        <main class="main">
          <app-tasks-list-component></app-tasks-list-component>
        </main>`
    };

    const aboutState = {
      name: 'about',
      url: '/',
      template: `
          <app-about-component></app-about-component>
`    };

    $stateProvider.state(ToDoListState);
    $stateProvider.state(aboutState);
  };


export { routeConfig };
