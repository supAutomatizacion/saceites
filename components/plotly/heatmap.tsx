'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeatmapTrendChart() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [themeVersion, setThemeVersion] = useState(0);
    const currentTheme = useRef<string>('');

    /* Detectar cambios de tema */
    useEffect(() => {
        const observer = new MutationObserver(() => {
            const newTheme = document.documentElement.classList.contains('dark')
                ? 'dark'
                : 'light';

            if (newTheme !== currentTheme.current) {
                currentTheme.current = newTheme;
                setThemeVersion(v => v + 1);
            }
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        return () => observer.disconnect();
    }, []);

    /* Cargar gráfico */
    useEffect(() => {
        if (!containerRef.current) return;

        const loadPlot = async () => {
            const Plotly = await import('plotly.js-dist-min');

            /* ===== EJE Y (Máquinas) ===== */
            const machines = [
                'Trepko',
                'Sig',
                'Primo',
                'Solidos',
                'Industrial',
                'Kosme',
                'Ocim',
                'prueba1',
            ];

            /* ===== EJE X (Semanas del año) ===== */
            const weeks = Array.from({ length: 12 }, (_, i) => `Mes ${i + 1}`);

            /* ===== MATRIZ Z (fallas) ===== */
            // z[y][x] -> fallas por máquina y semana
            const z = machines.map(() =>
                weeks.map(() => Math.floor(Math.random() * 8)) // 0–7 fallas
            );

            const data: Plotly.Data[] = [
                {
                    type: 'heatmap',
                    x: weeks,
                    y: machines,
                    z,
                    hoverongaps: false,
                    colorscale: 'YlOrRd',
                },
            ];

            const layout: Partial<Plotly.Layout> = {
                title: {
                    text: 'Número de fallas por linea',
                },

                xaxis: {
                    type: 'category',
                    tickmode: 'array',
                    tickvals: weeks,
                    ticktext: weeks,
                    tickangle: -45,
                    automargin: true,
                    tickfont: {
                        size: 8,
                        family: 'Inter, sans-serif',
                        color: '#666',
                    },
                },

                yaxis: {
                    type: 'category',
                    tickmode: 'array',
                    tickvals: machines,
                    ticktext: machines,
                    automargin: true,
                },

                margin: {
                    l: 130,
                    b: 10,
                    r: 40,
                    t: 60,
                },
            };

            await Plotly.react(
                containerRef.current!,
                data,
                layout,
                { responsive: true }
            );
        };

        loadPlot();

        return () => {
            if (containerRef.current) {
                const Plotly = require('plotly.js-dist-min');
                Plotly.purge(containerRef.current);
            }
        };
    }, [themeVersion]);

    return (
        <div
            ref={containerRef}
            className="w-full h-full rounded-2xl overflow-hidden"
        />
    );
}
