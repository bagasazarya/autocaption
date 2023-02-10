

import os
import openai

openai.api_key = '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'


def cutofMessage(query):
    response = openai.Completion.create(
    model="text-davinci-003",
    prompt="Produk kami neuCentrIX, neuAPIX {}".format(query),
    temperature=0.7,
    max_tokens=256,
    top_p=1,
    frequency_penalty=0,
    presence_penalty=0
)
