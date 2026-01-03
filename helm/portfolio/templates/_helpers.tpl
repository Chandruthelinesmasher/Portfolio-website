{{- define "portfolio.name" -}}
portfolio
{{- end }}

{{- define "portfolio.fullname" -}}
{{ include "portfolio.name" . }}-{{ .Release.Name }}
{{- end }}
