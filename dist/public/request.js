"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Get = exports.Post = void 0;
function Post(path, data) {
    return window.fetch(path, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}
exports.Post = Post;
function Get(path, data) {
    return window.fetch(path, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
}
exports.Get = Get;
//# sourceMappingURL=request.js.map