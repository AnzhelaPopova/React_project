Week27

1.  это может привести к нежелательным результатам и привести к проблемам с производительностью.
2.  onClick = (id, title) => (e) => { console.log('Действие на строке ' + id, ‘title’ + title); e.preventDefault();
    this.setState({ count: this.state.count + 1 }); };
    render()
    { const {id, title} = this.props;
    const {count} = this.state;
    return <a href="#" onClick={this.onClick(id)}>
    click {title} {count} </a>; }
3.  В отличие от DOM, виртуальный DOM не является официальной спецификацией, а представляет собой новый метод взаимодействия с DOM
4.  Foo, bar, baz. Foo выходит после вызова функции handleChange, bar – setState асинхронная функция. Baz – сallback

5.  выделение текста, фокус и проигрывание медиа непосредственно из JavaScript кода.
6.  Реакт следует принципу разделения ответственности, где каждый компонент отвечает только за свою логику и рендеринг. Вызов методов ребенка из родителя нарушает это разделение ответственности и создает зависимости между компонентами.
7.  Да
8.  Переиспользование хуков, улучшение читаемости