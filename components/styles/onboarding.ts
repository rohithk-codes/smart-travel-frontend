
import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingTop: 12,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  logoText: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.primary,
  },

  pageCount: {
    color: "#777",
    fontSize: 16,
    fontWeight: "600",
  },

  titleWrapper: {
    marginTop: 24,
  },

  title: {
    fontSize: 38,
    fontWeight: "800",
    color: COLORS.text,
    lineHeight: 46,
  },

  subtitle: {
    marginTop: 16,
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.gray,
  },

  mapContainer: {
    flex: 1,
    marginTop: 24,
    borderRadius: 40,
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#EEF1F8",
  },

  mapImage: {
    width: "100%",
    height: "100%",
  },

  liveBadge: {
    position: "absolute",
    top: 24,
    right: 20,
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: 18,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  liveDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    backgroundColor: "#2ECC71",
  },

  liveText: {
    fontWeight: "700",
    fontSize: 16,
  },

  distanceCard: {
    position: "absolute",
    left: 18,
    top: 80,
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 16,
  },

  distance: {
    fontSize: 26,
    fontWeight: "800",
  },

  distanceSmall: {
    color: "#777",
    marginTop: 4,
  },

  etaCard: {
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: "#fff",
    borderRadius: 26,
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  etaSmall: {
    color: "#888",
  },

  etaTime: {
    marginTop: 6,
    fontSize: 24,
    fontWeight: "800",
    color: COLORS.primary,
  },

  homeIcon: {
    width: 52,
    height: 52,
    borderRadius: 18,
    backgroundColor: "#EEF1FF",
    justifyContent: "center",
    alignItems: "center",
  },

  petMarker: {
    position: "absolute",
    top: "42%",
    left: "45%",
    width: 90,
    height: 90,
    borderRadius: 999,
    borderWidth: 6,
    borderColor: "#B8A9FF",
    overflow: "hidden",
  },

  petImage: {
    width: "100%",
    height: "100%",
  },

  bottomCard: {
    backgroundColor: "#fff",
    marginTop: 18,
    borderRadius: 36,
    padding: 22,
    marginBottom: 18,
  },

  bottomTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  avatar: {
    width: 72,
    height: 72,
    borderRadius: 999,
  },

  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  petName: {
    fontSize: 26,
    fontWeight: "700",
  },

  greenText: {
    color: "#22C55E",
    marginTop: 6,
    fontWeight: "600",
  },

  progressBg: {
    marginTop: 12,
    height: 8,
    borderRadius: 999,
    backgroundColor: "#ECEBFF",
    overflow: "hidden",
  },

  progressFill: {
    width: "55%",
    height: "100%",
    backgroundColor: COLORS.primary,
  },

  deliveryBtn: {
    width: 64,
    height: 64,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },

  footerText: {
    marginTop: 16,
    textAlign: "center",
    color: "#777",
    fontWeight: "600",
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 26,
  },

  navItem: {
    alignItems: "center",
    gap: 6,
  },

  navText: {
    color: "#777",
    fontSize: 13,
  },

  petSection: {
    height: 260,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  bigDog: {
    width: 180,
    height: 180,
    borderRadius: 999,
    position: "absolute",
    left: 40,
    bottom: 0,
  },

  bigCat: {
    width: 140,
    height: 140,
    borderRadius: 999,
    position: "absolute",
    right: 40,
    bottom: 0,
  },

  shield: {
    width: 82,
    height: 82,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 40,
    top: 10,
  },

  featureCard: {
    backgroundColor: "#fff",
    borderRadius: 28,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
    marginBottom: 18,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.06,
    shadowRadius: 20,

    elevation: 4,
  },

  featureIcon: {
    width: 62,
    height: 62,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  featureTitle: {
    fontSize: 20,
    fontWeight: "700",
  },

  featureDesc: {
    marginTop: 6,
    color: "#777",
    lineHeight: 22,
  },

  phoneMockup: {
    marginTop: 40,
    alignSelf: "center",
    width: width * 0.72,
    height: height * 0.36,
    borderRadius: 44,
    justifyContent: "center",
    alignItems: "center",
  },

  time: {
    fontSize: 72,
    color: "#fff",
    fontWeight: "300",
    marginTop: 18,
  },

  date: {
    fontSize: 18,
    color: "#fff",
    marginTop: 8,
  },

  notificationCard: {
    backgroundColor: "#fff",
    borderRadius: 28,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginBottom: 18,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.07,
    shadowRadius: 18,

    elevation: 4,
  },

  notificationIcon: {
    width: 58,
    height: 58,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },

  notificationTitle: {
    fontSize: 20,
    fontWeight: "700",
  },

  notificationDesc: {
    marginTop: 4,
    color: "#666",
    lineHeight: 22,
  },

  notificationTime: {
    color: "#999",
    fontSize: 12,
  },

  ctaBtn: {
    height: 72,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
    marginTop: 12,
  },

  ctaText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },

  securityText: {
    textAlign: "center",
    marginTop: 18,
    color: "#777",
    fontSize: 14,
  },

  dot: {
    backgroundColor: "#DADCF3",
    width: 8,
    height: 8,
    borderRadius: 999,
    marginBottom: 40,
  },

  activeDot: {
    backgroundColor: COLORS.primary,
    width: 26,
    height: 8,
    borderRadius: 999,
    marginBottom: 40,
  },
});

export default styles;