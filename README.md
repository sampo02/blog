[![CodeQL](https://github.com/sampo02/blog/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/sampo02/blog/actions/workflows/codeql-analysis.yml)
[![Lint](https://github.com/sampo02/blog/actions/workflows/lint.yml/badge.svg)](https://github.com/sampo02/blog/actions/workflows/lint.yml)

```bash
docker build -t gatsby .
docker run --rm -it --mount type=bind,source="$(pwd)",target=/app -p 8000:8000 -p 8090:8090 --env-file .env --name blog gatsby
```
