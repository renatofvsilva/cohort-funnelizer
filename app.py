
from flask import Flask, render_template
import plotly.graph_objects as go
import json
from datetime import datetime

app = Flask(__name__)

def create_funnel_chart(data):
    if not data:
        return None
    
    current_month_data = data[-1]  # Get the most recent month's data
    
    stages = ["Leads Recebidos", "Tentativa de Conexão", "Conectados", "Negociação", "Venda"]
    values = [
        current_month_data["leadsRecebidos"],
        current_month_data["tentativaConexao"],
        current_month_data["conectados"],
        current_month_data["negociacao"],
        current_month_data["venda"]
    ]
    
    colors = ["#9b87f5", "#7E69AB", "#6E59A5", "#5a4994", "#ea384c"]
    
    # Calculate conversion rates
    conversion_rates = ["100%"]
    for i in range(1, len(values)):
        rate = (values[i] / values[i-1] * 100) if values[i-1] != 0 else 0
        conversion_rates.append(f"{rate:.1f}%")
    
    # Create custom text labels
    text = [f"{stage} ({rate})" for stage, rate in zip(stages, conversion_rates)]
    
    fig = go.Figure(go.Funnel(
        y=stages,
        x=values,
        textinfo="text",
        text=text,
        textposition="outside",
        textfont=dict(size=12, color="white"),
        marker=dict(color=colors)
    ))
    
    fig.update_layout(
        plot_bgcolor='#1A1F2C',
        paper_bgcolor='#1A1F2C',
        height=600,
        margin=dict(t=20, b=20),
        font=dict(color='white'),
        showlegend=False
    )
    
    return json.dumps(fig.to_dict())

@app.route('/')
def index():
    # Sample data - replace with your actual data source
    sample_data = [{
        "month": "2024-03",
        "leadsRecebidos": 1000,
        "tentativaConexao": 800,
        "conectados": 600,
        "negociacao": 400,
        "venda": 200
    }]
    
    chart_json = create_funnel_chart(sample_data)
    return render_template('index.html', chart_json=chart_json)

if __name__ == '__main__':
    app.run(debug=True)
