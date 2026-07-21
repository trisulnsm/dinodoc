# Reducing False Positives


Trisul reduces false positives by continuously learning the normal behavior of your network over time. Its Machine Learning (ML) engine builds behavioral baselines from historical traffic patterns, user activity, application usage, and network metrics. As more data is collected, these baselines become increasingly accurate, allowing Trisul to distinguish between legitimate variations in network activity and genuine anomalies.

Rather than relying solely on static thresholds or signatures, Trisul compares current network behavior against these dynamically learned baselines. This adaptive approach significantly reduces false positives by preventing expected or recurring network events from being incorrectly flagged as threats, while improving the accuracy of anomaly detection as the system gains more operational history.