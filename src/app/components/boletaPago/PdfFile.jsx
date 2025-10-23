import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 11,
    fontFamily: 'Helvetica',
    backgroundColor: '#fff',
  },
  headerContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingBottom: 10,
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  companyInfo: {
    fontSize: 10,
    textAlign: 'center',
    color: '#555',
    marginBottom: 2,
  },
  invoiceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#555',
    borderTopWidth: 1,
    borderTopColor: '#555',
    paddingVertical: 6,
    backgroundColor: '#f2f2f2',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 6,
  },
  colProduct: {
    flex: 5,
    paddingLeft: 6,
  },
  colQty: {
    flex: 1,
    textAlign: 'center',
  },
  colPrice: {
    flex: 2,
    textAlign: 'right',
    paddingRight: 6,
  },
  totalContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#eee',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  totalLabel: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  totalValue: {
    fontWeight: 'bold',
    fontSize: 13,
    marginLeft: 10,
  },
  footer: {
    marginTop: 40,
    fontSize: 9,
    textAlign: 'center',
    color: '#999',
  }
});

const formatDate = (date) => {
  const d = date instanceof Date ? date : new Date();
  return d.toLocaleDateString('es-PE');
};

const Boleta = ({ productos = [], total = 0 }) => (
  <Document>
    <Page size="A4" style={styles.page}>

      <View style={styles.headerContainer}>
        <Text style={styles.companyName}>lEoDomoTics</Text>
        <Text style={styles.companyInfo}>RUC: 123465789</Text>
        <Text style={styles.companyInfo}>Jirón de la Unión 1081 Lima, Perú</Text>
        <Text style={styles.companyInfo}>Teléfono: +51 946874037</Text>
      </View>

      <Text style={styles.invoiceTitle}>Boleta de Pago</Text>

      <View style={styles.tableHeader}>
        <Text style={styles.colProduct}>Producto</Text>
        <Text style={styles.colQty}>Cantidad</Text>
        <Text style={styles.colPrice}>Precio (S/)</Text>
      </View>

      {productos.map((producto, i) => (
        <View key={i} style={styles.tableRow}>
          <Text style={styles.colProduct}>{producto.title}</Text>
          <Text style={styles.colQty}>{producto.quantity}</Text>
          <Text style={styles.colPrice}>
            {Number(producto.price * producto.quantity).toFixed(2)}
          </Text>
        </View>
      ))}

      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total:</Text>
        <Text style={styles.totalValue}>S/ {total.toFixed(2)}</Text>
      </View>

      <Text style={styles.footer}>Gracias por su compra.</Text>
      <Text style={styles.footer}>Fecha: {formatDate(new Date())}</Text>

    </Page>
  </Document>
);

export default Boleta;
