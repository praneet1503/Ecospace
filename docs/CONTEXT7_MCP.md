# Context7 MCP — Configuration & Usage

This document collects practical configuration snippets and examples for using the Upstash "Context7" MCP server with local tools and LLM-assisted workflows. Use Context7 to provide up-to-date, versioned documentation and code examples to your development assistants.

> NOTE: Replace `YOUR_API_KEY` with a valid key when required. Running Context7 locally often uses `stdio` transport for MCP clients, or you can expose an HTTP endpoint.

## Quick run (npx)

Run the MCP server locally via npx (stdio transport):

```bash
npx -y @upstash/context7-mcp --api-key YOUR_API_KEY
```

This starts a local MCP process that speaks the Model Context Protocol over stdio.

## Docker

Run a container image (if available) for isolation:

```bash
docker run -i --rm context7-mcp
```

You can also build a small Dockerfile (example):

```dockerfile
FROM node:18-alpine
WORKDIR /app
RUN npm install -g @upstash/context7-mcp
CMD ["context7-mcp"]
```

## Run as HTTP service

If you prefer HTTP transport, start the server on a chosen port:

```bash
bun run dist/index.js --transport http --port 8080
```

Then point your MCP client at `http://localhost:8080/mcp` (or the appropriate URL).

## Tool-specific snippets

- Add to amp:

```bash
amp mcp add context7 https://mcp.context7.com/mcp
# with api key
amp mcp add context7 --header "CONTEXT7_API_KEY=YOUR_API_KEY" https://mcp.context7.com/mcp
```

- Add to Claude Code / other CLI MCP clients:

```bash
claude mcp add --transport http context7 https://mcp.context7.com/mcp --header "CONTEXT7_API_KEY: YOUR_API_KEY"
# or local
claude mcp add context7 -- npx -y @upstash/context7-mcp --api-key YOUR_API_KEY
```

- VS Code / Copilot Coding Agent / Perplexity Desktop / Cursor examples (JSON config):

```json
{
  "mcpServers": {
    "context7": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp", "--api-key", "YOUR_API_KEY"]
    }
  }
}
```

## macOS & Windows tips

- macOS: If you hit `request timed out`, specify the full Node.js path in TOML/JSON config.

```toml
[mcp_servers.context7]
command = "/Users/yourname/.nvm/versions/node/v22.14.0/bin/node"
args = ["/path/to/@upstash/context7-mcp/dist/index.js", "--transport", "stdio", "--api-key", "YOUR_API_KEY"]
```

- Windows (cmd): Use `cmd /c npx` wrapper in TOML to avoid some timeout behavior.

```toml
[mcp_servers.context7]
command = "cmd"
args = ["/c", "npx", "-y", "@upstash/context7-mcp", "--api-key", "YOUR_API_KEY"]
```

## Testing & Inspector

Use the Model Context Protocol inspector to validate the MCP server startup:

```bash
npx -y @modelcontextprotocol/inspector npx @upstash/context7-mcp
```

## context7.json (project metadata)

To make your own library easier for Context7 to parse, add a `context7.json` describing your project structure and versions. Example:

```json
{
  "$schema": "https://context7.com/schema/context7.json",
  "projectTitle": "Ecospace",
  "description": "Ecospace website documentation & examples",
  "folders": ["app", "lib"],
  "excludeFolders": ["node_modules"],
  "excludeFiles": [],
  "rules": ["Use Upstash Redis as a database"],
  "previousVersions": [
    { "tag": "v2.0", "title": "v2.0" }
  ]
}
```

## Best practices

- Use the hosted `https://mcp.context7.com/mcp` if you don't want to run locally.
- Provide a `context7.json` in your repo to help Context7 index docs, especially for internal project docs.
- Ask your LLM tools to `resolve-library-id` first or explicitly set the library id (e.g. `/upstash/context7`) to make results deterministic.

## Where to put Context7 instructions in this repo

- Keep this file at `docs/CONTEXT7_MCP.md` and link from `README.md` and `docs/QUICKSTART.md`.
- If you generate code or docs with LLMs, instruct them to use Context7 by default for library documentation lookups to prevent stale info.

---

Last updated: October 26, 2025
