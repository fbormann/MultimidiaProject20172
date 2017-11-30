/**
 * Online Judge
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as http from 'http';
import * as redux from 'redux';
import * as request from 'request';
import { Group, Problem, ProblemSet, ProblemSetReport, Submission, User, } from './models';

const BASE_PATH: string = 'http://localhost:8080/v1';

interface Map {
    // noinspection TsLint
    [key: string]: any;
}

export interface Response<T> {
    response: http.IncomingMessage;
    body?: T;
}

export interface Authentication {
    /**
     * Apply authentication settings to header and query params.
     */
    applyToRequest(options: request.Options): void;
}

export class HttpBasicAuth implements Authentication {
    public username: string;
    public password: string;

    applyToRequest(options: request.Options): void {
        options.auth = {
            username: this.username,
            password: this.password,
        };
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string;

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(options: request.Options): void {
        if (this.location === 'query') {
            options.qs[this.paramName] = this.apiKey;
        } else if (this.location === 'header' && options && options.headers) {
            options.headers[this.paramName] = this.apiKey;
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string;

    applyToRequest(options: request.Options): void {
        if (options && options.headers) {
            const authorization = 'Authorization';
            options.headers[authorization] = `Bearer ${this.accessToken}`;
        }
    }
}

const store = redux.createStore((state: Map, action: redux.AnyAction): Map => {
    switch (action.type) {
        case 'CACHE_RESPONSE_ACTION':
            const payload = 'payload';
            const key = 'key';
            const value = 'value';

            state[action[payload][key]] = action[payload][value];
            return state;

        case 'PURGE_CACHE_ACTION':
            return new Map;

        default:
            return state ? state : new Map;
    }
});

export const purgeCache = () => store.dispatch({
    type: 'PURGE_CACHE_ACTION',
});

export enum DefaultApiApiKeys {
    Bearer,
}

export class DefaultApi {
    protected defaultHeaders: request.Headers = {};
    protected authentications: {
        readonly [key: string]: Authentication;
    } = {
        'Bearer': new ApiKeyAuth('header', 'Authorization'),
    };

    constructor(basePath?: string);

    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else if (basePathOrUsername) {
            this.basePath = basePathOrUsername;
        }
    }

    protected _basePath: string = BASE_PATH;

    get basePath() {
        return this._basePath;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    protected _useQuerystring: boolean = false;

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set apiKey(key: string) {
        const name: string = 'Bearer';
        const auth: ApiKeyAuth = this.authentications[name] as ApiKeyAuth;
        auth.apiKey = key;
    }

    /**
     * Gets `Group` object.
     * @param groupId ID of group to return
     */
    public groupGroupIdGet(groupId: string): Promise<Response<Group>> {
        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new Error('Required parameter groupId was null or undefined when calling groupGroupIdGet.');
        }

        const cache = store.getState()[`DefaultApi#groupGroupIdGet(${groupId})`];
        if (cache) {
            return Promise.resolve(cache);
        }

        const localVarPath: string = `${this.basePath}/group/${groupId}`;
        const headerParams: Map = Object.assign({}, this.defaultHeaders);
        const queryParameters: Map = {};
        const formParams: Map = {};

        const options: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        if (Object.keys(formParams).length) {
            options.form = formParams;
        }

        this.authentications.Bearer.applyToRequest(options);

        return new Promise<Response<Group>>((resolve, reject) =>
            request(options, (error, response, body) => {
                if (error || response.statusCode! < 200 || response.statusCode! > 299) {
                    reject(error);
                } else {
                    store.dispatch({
                        type: 'CACHE_RESPONSE_ACTION',
                        payload: {
                            key: `DefaultApi#groupGroupIdGet(${groupId})`,
                            value: { response, body },
                        },
                    });
                    resolve({ response, body });
                }
            }),
        );
    }

    /**
     * Gets `Group` objects.
     */
    public groupsGet(): Promise<Response<Array<Group>>> {
        const cache = store.getState()[`DefaultApi#groupsGet`];
        if (cache) {
            return Promise.resolve(cache);
        }

        const localVarPath: string = `${this.basePath}/groups`;
        const headerParams: Map = Object.assign({}, this.defaultHeaders);
        const queryParameters: Map = {};
        const formParams: Map = {};

        const options: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        if (Object.keys(formParams).length) {
            options.form = formParams;
        }

        this.authentications.Bearer.applyToRequest(options);

        return new Promise<Response<Array<Group>>>((resolve, reject) =>
            request(options, (error, response, body) => {
                if (error || response.statusCode! < 200 || response.statusCode! > 299) {
                    reject(error);
                } else {
                    store.dispatch({
                        type: 'CACHE_RESPONSE_ACTION',
                        payload: {
                            key: `DefaultApi#groupsGet`,
                            value: { response, body },
                        },
                    });
                    resolve({ response, body });
                }
            }),
        );
    }

    /**
     * Creates `Problem` object.
     * @param problem `Problem` object.
     */
    public problemNewPost(problem: Problem): Promise<Response<string>> {
        // verify required parameter 'problem' is not null or undefined
        if (problem === null || problem === undefined) {
            throw new Error('Required parameter problem was null or undefined when calling problemNewPost.');
        }

        const cache = store.getState()[`DefaultApi#problemNewPost(${problem})`];
        if (cache) {
            return Promise.resolve(cache);
        }

        const localVarPath: string = `${this.basePath}/problem/new`;
        const headerParams: Map = Object.assign({}, this.defaultHeaders);
        const queryParameters: Map = {};
        const formParams: Map = {};

        const options: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: problem,
        };
        if (Object.keys(formParams).length) {
            options.form = formParams;
        }

        return new Promise<Response<string>>((resolve, reject) =>
            request(options, (error, response, body) => {
                if (error || response.statusCode! < 200 || response.statusCode! > 299) {
                    reject(error);
                } else {
                    store.dispatch({
                        type: 'CACHE_RESPONSE_ACTION',
                        payload: {
                            key: `DefaultApi#problemNewPost(${problem})`,
                            value: { response, body },
                        },
                    });
                    resolve({ response, body });
                }
            }),
        );
    }

    /**
     * Deletes `Problem` object.
     * @param problemId ID of problem to delete
     */
    public problemProblemIdDelete(problemId: string): Promise<Response<any>> {
        // verify required parameter 'problemId' is not null or undefined
        if (problemId === null || problemId === undefined) {
            throw new Error('Required parameter problemId was null or undefined when calling problemProblemIdDelete.');
        }

        const cache = store.getState()[`DefaultApi#problemProblemIdDelete(${problemId})`];
        if (cache) {
            return Promise.resolve(cache);
        }

        const localVarPath: string = `${this.basePath}/problem/{problemId}`.replace('{problemId}', problemId);
        const headerParams: Map = Object.assign({}, this.defaultHeaders);
        const queryParameters: Map = {};
        const formParams: Map = {};

        const options: request.Options = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        if (Object.keys(formParams).length) {
            options.form = formParams;
        }

        return new Promise<Response<any>>((resolve, reject) =>
            request(options, (error, response, body) => {
                if (error || response.statusCode! < 200 || response.statusCode! > 299) {
                    reject(error);
                } else {
                    store.dispatch({
                        type: 'CACHE_RESPONSE_ACTION',
                        payload: {
                            key: `DefaultApi#problemProblemIdDelete(${problemId})`,
                            value: { response, body },
                        },
                    });
                    resolve({ response, body });
                }
            }),
        );
    }

    /**
     * Gets `Problem` object.
     * @param problemId ID of problem to return
     */
    public problemProblemIdGet(problemId: string): Promise<Response<Problem>> {
        // verify required parameter 'problemId' is not null or undefined
        if (problemId === null || problemId === undefined) {
            throw new Error('Required parameter problemId was null or undefined when calling problemProblemIdGet.');
        }

        const cache = store.getState()[`DefaultApi#problemProblemIdGet(${problemId})`];
        if (cache) {
            return Promise.resolve(cache);
        }

        const localVarPath: string = `${this.basePath}/problem/${problemId}`;
        const headerParams: Map = Object.assign({}, this.defaultHeaders);
        const queryParameters: Map = {};
        const formParams: Map = {};

        const options: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        if (Object.keys(formParams).length) {
            options.form = formParams;
        }

        return new Promise<Response<Problem>>((resolve, reject) =>
            request(options, (error, response, body) => {
                if (error || response.statusCode! < 200 || response.statusCode! > 299) {
                    reject(error);
                } else {
                    store.dispatch({
                        type: 'CACHE_RESPONSE_ACTION',
                        payload: {
                            key: `DefaultApi#problemProblemIdGet(${problemId})`,
                            value: { response, body },
                        },
                    });
                    resolve({ response, body });
                }
            }),
        );
    }

    /**
     * Puts `Problem` object.
     * @param problemId ID of problem to put
     */
    public problemProblemIdPut(problemId: string): Promise<Response<any>> {
        // verify required parameter 'problemId' is not null or undefined
        if (problemId === null || problemId === undefined) {
            throw new Error('Required parameter problemId was null or undefined when calling problemProblemIdPut.');
        }

        const cache = store.getState()[`DefaultApi#problemProblemIdPut(${problemId})`];
        if (cache) {
            return Promise.resolve(cache);
        }

        const localVarPath: string = `${this.basePath}/problem/${problemId}`;
        const headerParams: Map = Object.assign({}, this.defaultHeaders);
        const queryParameters: Map = {};
        const formParams: Map = {};

        const options: request.Options = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        if (Object.keys(formParams).length) {
            options.form = formParams;
        }

        return new Promise<Response<any>>((resolve, reject) =>
            request(options, (error, response, body) => {
                if (error || response.statusCode! < 200 || response.statusCode! > 299) {
                    reject(error);
                } else {
                    store.dispatch({
                        type: 'CACHE_RESPONSE_ACTION',
                        payload: {
                            key: `DefaultApi#problemProblemIdPut(${problemId})`,
                            value: { response, body },
                        },
                    });
                    resolve({ response, body });
                }
            }),
        );
    }

    /**
     * Posts `Submission` object.
     * @param problemId ID of problem to return
     * @param submission &#x60;Submission&#x60; object.
     */
    public problemProblemIdSubmitPost(problemId: string, submission: Submission): Promise<Response<Submission>> {
        // verify required parameter 'problemId' is not null or undefined
        if (problemId === null || problemId === undefined) {
            throw new Error('Required parameter problemId was null or undefined when calling problemProblemIdSubmitPost.');
        }

        // verify required parameter 'submission' is not null or undefined
        if (submission === null || submission === undefined) {
            throw new Error('Required parameter submission was null or undefined when calling problemProblemIdSubmitPost.');
        }

        const cache = store.getState()[`DefaultApi#problemProblemIdSubmitPost(${problemId}, ${submission})`];
        if (cache) {
            return Promise.resolve(cache);
        }

        const localVarPath: string = `${this.basePath}/problem/{problemId}/submit`.replace('{problemId}', problemId);
        const headerParams: Map = Object.assign({}, this.defaultHeaders);
        const queryParameters: Map = {};
        const formParams: Map = {};

        const options: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: submission,
        };
        if (Object.keys(formParams).length) {
            options.form = formParams;
        }

        this.authentications.Bearer.applyToRequest(options);

        return new Promise<Response<Submission>>((resolve, reject) =>
            request(options, (error, response, body) => {
                if (error || response.statusCode! < 200 || response.statusCode! > 299) {
                    reject(error);
                } else {
                    store.dispatch({
                        type: 'CACHE_RESPONSE_ACTION',
                        payload: {
                            key: `DefaultApi#problemProblemIdSubmitPost(${problemId}, )${submission}`,
                            value: { response, body },
                        },
                    });
                    resolve({ response, body });
                }
            }),
        );
    }

    /**
     * Gets `ProblemSet` object.
     * @param problemSetId ID of problem set to return
     */
    public problemSetProblemSetIdGet(problemSetId: string): Promise<Response<ProblemSet>> {
        // verify required parameter 'problemSetId' is not null or undefined
        if (problemSetId === null || problemSetId === undefined) {
            throw new Error('Required parameter problemSetId was null or undefined when calling problemSetProblemSetIdGet.');
        }

        const cache = store.getState()[`DefaultApi#problemSetProblemSetIdGet(${problemSetId})`];
        if (cache) {
            return Promise.resolve(cache);
        }

        const localVarPath: string = `${this.basePath}/problemSet/${problemSetId}`;
        const headerParams: Map = Object.assign({}, this.defaultHeaders);
        const queryParameters: Map = {};
        const formParams: Map = {};

        const options: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        if (Object.keys(formParams).length) {
            options.form = formParams;
        }

        this.authentications.Bearer.applyToRequest(options);

        return new Promise<Response<ProblemSet>>((resolve, reject) =>
            request(options, (error, response, body) => {
                if (error || response.statusCode! < 200 || response.statusCode! > 299) {
                    reject(error);
                } else {
                    store.dispatch({
                        type: 'CACHE_RESPONSE_ACTION',
                        payload: {
                            key: `DefaultApi#problemSetProblemSetIdGet(${problemSetId})`,
                            value: { response, body },
                        },
                    });
                    resolve({ response, body });
                }
            }),
        );
    }

    /**
     * Generates 'ProblemSetReport' object.
     * @param problemSetId ID of problem set to report about
     */
    public problemSetProblemSetIdReportGet(problemSetId: string): Promise<Response<ProblemSetReport>> {
        // verify required parameter 'problemSetId' is not null or undefined
        if (problemSetId === null || problemSetId === undefined) {
            throw new Error('Required parameter problemSetId was null or undefined when calling problemSetProblemSetIdReportGet.');
        }

        const cache = store.getState()[`DefaultApi#problemSetProblemSetIdReportGet(${problemSetId})`];
        if (cache) {
            return Promise.resolve(cache);
        }

        const localVarPath: string = `${this.basePath}/problemSet/${problemSetId}/report`;
        const headerParams: Map = Object.assign({}, this.defaultHeaders);
        const queryParameters: Map = {};
        const formParams: Map = {};

        const options: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        if (Object.keys(formParams).length) {
            options.form = formParams;
        }

        this.authentications.Bearer.applyToRequest(options);

        return new Promise<Response<ProblemSetReport>>((resolve, reject) =>
            request(options, (error, response, body) => {
                if (error || response.statusCode! < 200 || response.statusCode! > 299) {
                    reject(error);
                } else {
                    store.dispatch({
                        type: 'CACHE_RESPONSE_ACTION',
                        payload: {
                            key: `DefaultApi#problemSetProblemSetIdReportGet(${problemSetId})`,
                            value: { response, body },
                        },
                    });
                    resolve({ response, body });
                }
            }),
        );
    }

    /**
     * Gets `Problem` objects.
     */
    public problemsGet(): Promise<Response<Array<Problem>>> {
        const cache = store.getState()[`DefaultApi#problemsGet`];
        if (cache) {
            return Promise.resolve(cache);
        }

        const localVarPath: string = `${this.basePath}/problems`;
        const headerParams: Map = Object.assign({}, this.defaultHeaders);
        const queryParameters: Map = {};
        const formParams: Map = {};

        const options: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        if (Object.keys(formParams).length) {
            options.form = formParams;
        }

        return new Promise<Response<Array<Problem>>>((resolve, reject) =>
            request(options, (error, response, body) => {
                if (error || response.statusCode! < 200 || response.statusCode! > 299) {
                    reject(error);
                } else {
                    store.dispatch({
                        type: 'CACHE_RESPONSE_ACTION',
                        payload: {
                            key: `DefaultApi#problemsGet`,
                            value: { response, body },
                        },
                    });
                    resolve({ response, body });
                }
            }),
        );
    }

    /**
     * Gets `User` object.
     */
    public profileGet(): Promise<Response<User>> {
        const cache = store.getState()[`DefaultApi#profileGet`];
        if (cache) {
            return Promise.resolve(cache);
        }

        const localVarPath: string = `${this.basePath}/profile`;
        const headerParams: Map = Object.assign({}, this.defaultHeaders);
        const queryParameters: Map = {};
        const formParams: Map = {};

        const options: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        if (Object.keys(formParams).length) {
            options.form = formParams;
        }

        this.authentications.Bearer.applyToRequest(options);

        return new Promise<Response<User>>((resolve, reject) =>
            request(options, (error, response, body) => {
                if (error || response.statusCode! < 200 || response.statusCode! > 299) {
                    reject(error);
                } else {
                    store.dispatch({
                        type: 'CACHE_RESPONSE_ACTION',
                        payload: {
                            key: `DefaultApi#profileGet`,
                            value: { response, body },
                        },
                    });
                    resolve({ response, body });
                }
            }),
        );
    }

    /**
     * Gets `User` object.
     * @param userId ID of user to return
     */
    public profileUserIdGet(userId: string): Promise<Response<User>> {
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling profileUserIdGet.');
        }

        const cache = store.getState()[`DefaultApi#profileUserIdGet(${userId})`];
        if (cache) {
            return Promise.resolve(cache);
        }

        const localVarPath: string = `${this.basePath}/profile/${userId}`;
        const headerParams: Map = Object.assign({}, this.defaultHeaders);
        const queryParameters: Map = {};
        const formParams: Map = {};

        const options: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        if (Object.keys(formParams).length) {
            options.form = formParams;
        }

        return new Promise<Response<User>>((resolve, reject) =>
            request(options, (error, response, body) => {
                if (error || response.statusCode! < 200 || response.statusCode! > 299) {
                    reject(error);
                } else {
                    store.dispatch({
                        type: 'CACHE_RESPONSE_ACTION',
                        payload: {
                            key: `DefaultApi#profileUserIdGet(${userId})`,
                            value: { response, body },
                        },
                    });
                    resolve({ response, body });
                }
            }),
        );
    }

    /**
     * Gets `Submission` object.
     * @param submissionId ID of submission to return
     */
    public submissionSubmissionIdGet(submissionId: string): Promise<Response<Submission>> {
        // verify required parameter 'submissionId' is not null or undefined
        if (submissionId === null || submissionId === undefined) {
            throw new Error('Required parameter submissionId was null or undefined when calling submissionSubmissionIdGet.');
        }

        const cache = store.getState()[`DefaultApi#submissionSubmissionIdGet(${submissionId})`];
        if (cache) {
            return Promise.resolve(cache);
        }

        const localVarPath: string = `${this.basePath}/submission/${submissionId}`;
        const headerParams: Map = Object.assign({}, this.defaultHeaders);
        const queryParameters: Map = {};
        const formParams: Map = {};

        const options: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        if (Object.keys(formParams).length) {
            options.form = formParams;
        }

        this.authentications.Bearer.applyToRequest(options);

        return new Promise<Response<Submission>>((resolve, reject) =>
            request(options, (error, response, body) => {
                if (error || response.statusCode! < 200 || response.statusCode! > 299) {
                    reject(error);
                } else {
                    store.dispatch({
                        type: 'CACHE_RESPONSE_ACTION',
                        payload: {
                            key: `DefaultApi#submissionSubmissionIdGet(${submissionId})`,
                            value: { response, body },
                        },
                    });
                    resolve({ response, body });
                }
            }),
        );
    }

    /**
     * Gets `Submission` objects.
     */
    public submissionsGet(): Promise<Response<Array<Submission>>> {
        const cache = store.getState()[`DefaultApi#submissionsGet`];
        if (cache) {
            return Promise.resolve(cache);
        }

        const localVarPath: string = `${this.basePath}/submissions`;
        const headerParams: Map = Object.assign({}, this.defaultHeaders);
        const queryParameters: Map = {};
        const formParams: Map = {};

        const options: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        if (Object.keys(formParams).length) {
            options.form = formParams;
        }

        this.authentications.Bearer.applyToRequest(options);

        return new Promise<Response<Array<Submission>>>((resolve, reject) =>
            request(options, (error, response, body) => {
                if (error || response.statusCode! < 200 || response.statusCode! > 299) {
                    reject(error);
                } else {
                    store.dispatch({
                        type: 'CACHE_RESPONSE_ACTION',
                        payload: {
                            key: `DefaultApi#submissionsGet`,
                            value: { response, body },
                        },
                    });
                    resolve({ response, body });
                }
            }),
        );
    }
}
