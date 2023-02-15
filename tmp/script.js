import * as openai from 'openai';

var _pj;

var completion, model_engine, prompt, response;

function _pj_snippets(container) {
  function in_es6(left, right) {
    if (right instanceof Array || typeof right === "string") {
      return right.indexOf(left) > -1;
    } else {
      if (right instanceof Map || right instanceof Set || right instanceof WeakMap || right instanceof WeakSet) {
        return right.has(left);
      } else {
        return left in right;
      }
    }
  }

  container["in_es6"] = in_es6;
  return container;
}

_pj = {};

_pj_snippets(_pj);

openai.api_key = "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";

while (true) {
  model_engine = "text-davinci-003";
  prompt = input("Enter new prompt: ");

  if (_pj.in_es6("exit", prompt) || _pj.in_es6("quit", prompt)) {
    break;
  }

  completion = openai.Completion.create({
    "engine": model_engine,
    "prompt": prompt,
    "max_tokens": 1024,
    "n": 1,
    "stop": null,
    "temperature": 0.5
  });
  response = completion.choices[0].text;
  console.log(response);
}
