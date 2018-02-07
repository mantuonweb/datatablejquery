(function(s:any) {
    console.log('Web worker loaded');
    addEventListener('message', (message) => {
        s.postMessage('this is the response ' + message.data);
    });
    s.onmessage=function(e) {
        console.log('hello from a page',e.data);
    };
}(self));