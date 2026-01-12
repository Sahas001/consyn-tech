# API Reference

Complete API documentation for Consyn's REST API.

## Base URL

```
https://api.consyn.tech/v1
```

## Authentication

All API requests require authentication using your API key in the header:

```bash
Authorization: Bearer YOUR_API_KEY
```

### Getting Your API Key

1. Log in to your Consyn dashboard
2. Navigate to **Settings** → **API Keys**
3. Click **Generate New Key**
4. Copy and securely store your key

## Rate Limits

| Plan | Requests/Month | Rate Limit |
|------|---------------|------------|
| Starter | 10,000 | 100/minute |
| Professional | Unlimited | 1,000/minute |
| Enterprise | Unlimited | Custom |

## Endpoints

### Workspaces

#### List All Workspaces
```http
GET /workspaces
```

**Response:**
```json
{
  "workspaces": [
    {
      "id": "ws_1234567890",
      "name": "My Workspace",
      "created_at": "2026-01-01T00:00:00Z"
    }
  ]
}
```

#### Create Workspace
```http
POST /workspaces
```

**Request Body:**
```json
{
  "name": "New Workspace",
  "description": "Optional description"
}
```

### Workflows

#### List Workflows
```http
GET /workflows
```

#### Create Workflow
```http
POST /workflows
```

**Request Body:**
```json
{
  "name": "My Workflow",
  "description": "Workflow description",
  "config": {
    "trigger": "webhook",
    "actions": []
  }
}
```

#### Execute Workflow
```http
POST /workflows/{workflow_id}/execute
```

### Analytics

#### Get Analytics
```http
GET /analytics
```

**Query Parameters:**
- `start_date` (ISO 8601 format)
- `end_date` (ISO 8601 format)
- `metrics` (comma-separated list)

## Error Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 429 | Rate Limit Exceeded |
| 500 | Internal Server Error |

## SDKs

We provide official SDKs for:
- JavaScript/TypeScript
- Python
- Go
- Ruby

## Webhooks

Configure webhooks to receive real-time notifications:

```http
POST /webhooks
```

**Request Body:**
```json
{
  "url": "https://your-domain.com/webhook",
  "events": ["workflow.completed", "workflow.failed"]
}
```

## Support

For API support:
- Email: [sahastimilsina@gmail.com](mailto:sahastimilsina@gmail.com)
- GitHub Issues: [@Sahas001](https://github.com/Sahas001)
- Documentation: [docs.consyn.tech](https://docs.consyn.tech)

---

[← Back to Documentation](./README.md)
